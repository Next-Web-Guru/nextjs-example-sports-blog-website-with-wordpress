const API_URL = process.env.wordpressApiUrl

async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  )
  return data.post
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return data?.posts
}

export async function getAllPostsWithUri() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            uri
          }
        }
      }
    }
  `)
  return data?.posts
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            uri
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.posts
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug))
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug
  const isDraft = isSamePost && postPreview?.status === 'draft'
  const isRevision = isSamePost && postPreview?.status === 'publish'
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
    // Only some of the fields of a revision are considered as there are some inconsistencies
    isRevision
      ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
      : ''
    }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? 'DATABASE_ID' : 'SLUG',
      },
    }
  )

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node

    if (revision) Object.assign(data.post, revision)
    delete data.post.revisions
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug)
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop()

  return data
}


export async function getCateogryRecentPostbyName(categoryName) {
  const data = await fetchAPI(
    `
    query CategoryPostbyName($categoryName: String! ="") {
  posts(where: {categoryName: $categoryName }, first: 21) {
    pageInfo {
      seo {
        schema {
          raw
        }
      }
    }
    edges {
      node {
        title
        excerpt
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
            uri
          }
        }
        date
        uri
      }
    }
  }
}
`, {
    variables: {
      categoryName: categoryName
    }
  }
  )
  return data?.posts
}

export async function getPostDetailsByUri(uri) {
  const data = await fetchAPI(`
   fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
      url
      locale
    }

    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
            uri
          }
        }
      }
      seo {
        title
        schema {
          raw
        }
        canonical
        metaDesc
        metaKeywords
        twitterDescription
        twitterTitle
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphSiteName
        opengraphTitle
        opengraphType
        opengraphUrl
        readingTime
      }
    }



    query PostDetailsbyUri($id: ID = "") {
      post(
        id: $id,
        idType: URI
      ) {
        ...PostFields
        content
      }
    }
  `, {
    variables: {
      id: uri
    }
  })
  return data?.post
}


export async function getPageDetailsByUri(uri) {
  const data = await fetchAPI(`
    fragment PageFields on Page {
      title
      slug
      date
      featuredImage {
        node {
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
      seo {
        title
        schema {
          raw
        }
        canonical
        metaDesc
        metaKeywords
        twitterDescription
        twitterTitle
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphSiteName
        opengraphTitle
        opengraphType
        opengraphUrl
        readingTime
      }
    }

    query PageDetailsByUri($id: ID = "") {
      page(id: $id, idType: URI){
        ...PageFields
      }
    }

  `, {
    variables: {
      id: uri
    }
  })
  return data?.page
}


export async function getHeaderMenuByName(menu_name) {
  const data = await fetchAPI(
    `
    query GetHeaderMenuByName($id: ID = "") {
  menu(id: $id, idType: NAME) {
    menuItems {
      edges {
        node {
          path
          label
        }
      }
    }
  }
}
  `,
    {
      variables: {
        id: menu_name,
      },
    }
  )

  return data
}
