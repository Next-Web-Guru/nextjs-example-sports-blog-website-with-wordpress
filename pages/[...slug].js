import { VStack } from "@chakra-ui/react";
import { filterProps } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import PostList from "../components/archives/post-list";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import Post from "../components/post/post";
import { getAllPostsWithSlug, getCateogryRecentPostbyName, getHeaderMenuByName, getPostDetailsByUri } from "../lib/api";

function OtherPages(props) {

    const router = useRouter()

    let componentToShow

    if (router.isFallback) {
        return (
            <>
                <h1>Loading</h1>
            </>
        )
    }
    else {
        console.log(props)



        const urlType = props.urlType
        //if found any data
        if (props.data && props.data) {

            //check for category, tag, author
            if (urlType === 'category' || urlType === 'tag' || urlType === 'author') {

                componentToShow = <PostList urlType={props.urlType} urlName={props.urlName} data={props.data} />

            }
            else {
                //it means it is a post or page
                //we can also call different component for post and page
                //currently we are call one component for both post and page
                //console.log(props.data)

                componentToShow = <Post data={props.data} />

            }
        }
        else {
            componentToShow = '<h1>Not Found Page</h1>'
        }
    }


    return (
        <>
            <Header menu={props.menu} />
            <VStack>
                <div className="mainBody">
                    <main className="mainContent">
                        {componentToShow}
                    </main>
                </div>
            </VStack>
            <Footer />
        </>
    )

}

export async function getStaticProps(context) {
    const { params } = context
    const { slug } = params
    const urlType = slug[0]

    //get data
    let data;
    if (urlType === 'category' || urlType === 'tag' || urlType === 'author') {
        data = await getCateogryRecentPostbyName(slug[1])
    }
    else {
        //it means it is a post or page
        const uri = params.slug.join('/')
        data = await getPostDetailsByUri(uri)
    }

    const menuData = await getHeaderMenuByName(process.env.headerMenuName)

    return {
        props: {
            urlType: urlType,
            urlName: slug[1],
            data: data,
            menu: menuData.menu
        },
        revalidate: 10 //10 minutes
    }
}



export function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    }
}


export default OtherPages;