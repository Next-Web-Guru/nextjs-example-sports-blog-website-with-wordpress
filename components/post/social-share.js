import Link from 'next/link'
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import {
    FacebookShareButton,
    TwitterShareButton,
    TelegramShareButton,
    LinkedinShareButton,
    TumblrShareButton,
    WhatsappShareButton

} from "react-share";

import {
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";
import { RWebShare } from "react-web-share";
import { FaShareAlt } from 'react-icons/fa';

function SocialShare({ data }) {

    const post_link = data.seo.canonical
    const post_title = data.title

    return (
        <>
            <Flex display={{ base: 'none', md: 'block' }} className="desktopShareContainer">
                <Text fontSize="md">Share</Text>
                <SimpleGrid columns={1} spacing={2} >
                    <FacebookShareButton url={post_link}>
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton url={post_link}>
                        <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    <TelegramShareButton url={post_link}>
                        <TelegramIcon size={32} round={true} />
                    </TelegramShareButton>
                    <WhatsappShareButton url={post_link}>
                        <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                    <LinkedinShareButton edinShareButton url={post_link}>
                        <LinkedinIcon size={32} round={true} />
                    </LinkedinShareButton>
                    <TumblrShareButton url={post_link}>
                        <TumblrIcon size={32} round={true} />
                    </TumblrShareButton>
                </SimpleGrid>
            </Flex>

            <Flex display={{ base: 'block', md: 'none' }} className="mobileShareContainer">
                <RWebShare
                    data={{
                        text: post_title,
                        url: post_link,
                        title: "Share this news to",
                    }}
                    onClick={() => console.log("shared successfully!")}
                >
                    <FaShareAlt size={30} />
                </RWebShare>
            </Flex>
        </>
    );
}

export default SocialShare;