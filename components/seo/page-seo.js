import Head from "next/head";

function PageSeo({ data }) {

    const seo = data.seo

    return (
        <Head>

            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

            <title>{seo.title}</title>

            <meta name="description" content={seo.metaDesc} />

            <link rel="canonical" href={seo.canonical} />


            {/* <script type="application/ld+json" className="yoast-schema-graph">
                {`
            ${seo.schema.raw}
`}
            </script> */}

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: seo.schema.raw }}
            />
        </Head>
    );
}

export default PageSeo;