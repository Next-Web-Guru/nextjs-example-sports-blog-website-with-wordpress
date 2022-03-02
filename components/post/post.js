import { Box, Grid } from "@chakra-ui/react";
import PostSeo from "../seo/post-seo";
import Sidebar from "../sidebar/sidebar";
import PostData from "./post-data";

function Post({ data }) {
    return (
        <>
            <PostSeo data={data} />
            <Grid templateColumns={{ md: "0.2fr 2.8fr 1fr", sm: "repeat(2, 1fr)" }} gap={{ base: 0, md: 4 }}>
                <Box>
                    <h1>Social</h1>
                </Box>
                <Box>
                    <PostData data={data} />
                </Box>
                <Box>
                    <Sidebar />
                </Box>
            </Grid>
        </>
    );
}

export default Post;