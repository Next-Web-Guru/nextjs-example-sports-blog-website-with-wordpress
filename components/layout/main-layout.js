import Footer from "./footer";
import Header from "./header";
import classes from '../../styles/layout.module.css'
import { HStack, Stack, styled, VStack } from "@chakra-ui/react";
import { getHeaderMenuByName } from "../../lib/api";
import useSWR from "swr";

function MainLayout({ children }) {

    const { data, error } = useSWR('/api/get-header-footer', (url) => fetch(url).then(res => res.json()))


    if (!data) {
        return 'loading'
    }

    return (
        <>
            <Header data={data} />
            <VStack>
                <div className="mainBody">
                    <main className={classes.mainContent}>
                        {children}
                    </main>
                </div>
            </VStack>
            <Footer />

        </>
    );
}



export default MainLayout;

