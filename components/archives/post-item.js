import { Box, Text } from "@chakra-ui/react";
import daysToWeeks from "date-fns/daysToWeeks";
import Image from "next/image";
import Link from "next/link";

function PostItem({ post }) {

    const postItem = post.node
    const title = postItem.title
    const imagePath = postItem.featuredImage.node.sourceUrl
    const author = postItem.author.node.name
    const date = new Date(postItem.date)
    const uri = postItem.uri

    //const date = new Date()

    return (
        <Link href={uri}>
            <a>
                <Box maxW="lg" borderWidth="1px" minHeight="200px" overflow="hidden">
                    <Image src={imagePath} width={320} height={180} layout="responsive" alt={title} />

                    <Box p="4">
                        <Text fontSize="xs">
                            By <b>{author}</b>
                            {" "}
                            on <b>{date.toDateString()}</b>
                        </Text>

                        <Text fontSize="lg" fontWeight="semibold">
                            <div dangerouslySetInnerHTML={{ __html: title }} />
                        </Text>
                    </Box>
                </Box>
            </a>
        </Link>
    );
}

export default PostItem;