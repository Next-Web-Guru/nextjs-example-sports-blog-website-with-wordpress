import { useColorMode } from "@chakra-ui/react"



export const HelperData = () => {
    const { colorMode } = useColorMode();

    const helperData = {
        "isDark": colorMode == "dark", //true or false
    }

    return {
        helperData
    };
}

export default HelperData;