import { Box, Center, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ClassesPostBody from '../../styles/post-body.module.css'
import PageSeo from "../seo/page-seo";

function PageData({ data }) {
    const date = new Date(data.date)

    return (
        <>
            <PageSeo data={data} />

            <Box overflow="hidden" >

                {/* Post title */}
                <Text fontSize="lg" as="h1" fontWeight="semibold" align="center">
                    <div dangerouslySetInnerHTML={{ __html: data.title }} />
                </Text>

                {/* Post Content */}
                <div
                    className={`${ClassesPostBody.content} contentBody`}
                    dangerouslySetInnerHTML={{ __html: data.content }}

                />
            </Box>
        </>
    );
}

export default PageData;