import { Box, Center, Text } from "@chakra-ui/react";
import Image from "next/image";
import ClassesPostBody from '../../styles/post-body.module.css'

function PostData({ data }) {
    const author = data.author.node
    const date = new Date(data.date)
    const imagePath = data.featuredImage.node.sourceUrl

    return (
        <>

            <Box overflow="hidden" >

                {/* Post title */}
                <Text fontSize="lg" as="h1" fontWeight="semibold" align="center">
                    <div dangerouslySetInnerHTML={{ __html: data.title }} />
                </Text>

                {/* Author detail */}
                <Text fontSize="md" as="p" align="center">
                    By <b>{`${author.firstName} ${author.lastName}`}</b>
                    on <b>{date.toDateString()}</b>
                </Text>

                {/* Featured Media */}
                <Image src={imagePath} width={320} height={180} layout="responsive" alt={data.title} />

                {/* Post Content */}
                <div
                    className={`${ClassesPostBody.content} contentBody`}
                    dangerouslySetInnerHTML={{ __html: data.content }}

                />
            </Box>
        </>
    );
}

export default PostData;