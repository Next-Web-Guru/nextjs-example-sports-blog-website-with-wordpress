import { Heading, Link } from "@chakra-ui/react";
import PrimeMembeershipCard from "./prime-membership-card";

function Sidebar() {
    return (
        <div className="sidebarContainer">
            <Heading size="md" textAlign="center" mt="5" p="2" bgColor="#08ffc5" color="blackAlpha.800">Advertisment</Heading>

            <Link href="https://bit.ly/3y4rhW4" target="_blank">

                <PrimeMembeershipCard />

            </Link>
        </div>
    );
}

export default Sidebar;