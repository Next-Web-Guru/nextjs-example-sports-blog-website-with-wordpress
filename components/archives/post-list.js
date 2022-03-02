import { Box, SimpleGrid } from "@chakra-ui/react";
import PostItem from "./post-item";

function PostList({ urlType, urlName, data }) {
    console.log(data)
    return (
        <Box overflow="hidden">
            <h1>{urlType} : {urlName}</h1>
            <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={2} >
                {
                    data.edges.map((node, index) => {
                        return <PostItem key={`post-item${index}`} post={node} />
                    })
                }
            </SimpleGrid>
        </Box>
    );
}

export default PostList;