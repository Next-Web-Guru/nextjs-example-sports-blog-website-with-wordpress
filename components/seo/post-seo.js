import Link from 'next/link'
import Head from "next/head";

function PostSeo({ data }) {

    const seo = data.seo
    const imagePath = data.featuredImage.node.sourceUrl
    const imageSize = data.featuredImage.node.mediaDetails
    const authorName = data.author.node.name

    return (
        <Head>

            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

            <title>{seo.title}</title>

            <meta name="description" content={seo.metaDesc} />

            <link rel="canonical" href={seo.canonical} />

            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content={seo.opengraphType} />
            <meta property="og:title" content={seo.opengraphTitle} />
            <meta property="og:description" content={seo.opengraphDescription} />
            <meta property="og:url" content={seo.opengraphUrl} />
            <meta property="og:site_name" content={seo.opengraphSiteName} />
            <meta property="article:published_time" content={seo.opengraphPublishedTime} />
            <meta property="article:modified_time" content={seo.opengraphModifiedTime} />
            <meta property="og:image" content={imagePath} />
            <meta property="og:image:width" content={imageSize.width} />
            <meta property="og:image:height" content={imageSize.height} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:label1" content="Written by" />
            <meta name="twitter:data1" content={authorName} />
            <meta name="twitter:label2" content="Est. reading time" />
            <meta name="twitter:data2" content="2 minutes" />

            {/* <script type="application/ld+json" className="yoast-schema-graph">

                {seo.schema.raw}

            </script> */}

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: seo.schema.raw }}
            />
        </Head>
    );
}

export default PostSeo;