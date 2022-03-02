import { Box, SimpleGrid } from "@chakra-ui/react";
import ArchiveSeo from "../seo/archive-seo";
import PostItem from "./post-item";

function PostList({ urlType, urlName, data, slug }) {
    //console.log(data)

    const pageType = ucfirst(slug[0])
    const pageName = ucfirst(slug[1].replace("-", " "))

    return (
        <>

            <ArchiveSeo data={data} pageType={pageType} pageName={pageName} />

            <Box overflow="hidden">
                <h1>{pageType} : {pageName}</h1>
                <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={2} >
                    {
                        data.edges.map((node, index) => {
                            return <PostItem key={`post-item${index}`} post={node} />
                        })
                    }
                </SimpleGrid>
            </Box>
        </>
    );
}

function ucfirst(str) {
    var firstLetter = str.slice(0, 1);
    return firstLetter.toUpperCase() + str.substring(1);
}

export default PostList;