import Link from 'next/link'
import Head from "next/head";

function ArchiveSeo({ data, pageType, pageName }) {

    const seo = data.pageInfo.seo


    return (
        <Head>

            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

            <title>{`${pageType} : ${pageName}`}</title>


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

export default ArchiveSeo;