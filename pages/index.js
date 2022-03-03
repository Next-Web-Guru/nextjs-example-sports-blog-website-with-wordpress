import Head from 'next/head'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import { getAllPostsForHome, getHeaderMenuByName } from '../lib/api'
import { useRouter } from 'next/router'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import { VStack } from '@chakra-ui/react'

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  const router = useRouter()
  //console.log(router)

  return (
    <>
      <Head>
        <title data-rh="true">BabaCric | Latest Sports News , Dream11 Prediction and Tips</title>
        <meta name="description" content="Get cricket news, tips and analysis reports that help you to create teams on Fantasy platforms like Dream11, Vision11, Playerzpot etc " />

        <Link prefetch={false} rel="canonical" href="http://babacric.in/" />
      </Head>

      {/* <Header menu={menu} /> */}
      <VStack>
        <div className="mainBody">
          <main className="mainContent">


            {heroPost && (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.featuredImage?.node}
                date={heroPost.date}
                author={heroPost.author?.node}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
                uri={heroPost.uri}
              />
            )}
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}

          </main>
        </div>
      </VStack>
      <Footer />
    </>
  )
}

export async function getStaticProps({ preview = false }) {

  const allPosts = await getAllPostsForHome(preview)
  //const menuData = await getHeaderMenuByName(process.env.headerMenuName)

  return {
    props: {
      allPosts,
      preview,
      //menu: menuData.menu 
    },
  }
}
