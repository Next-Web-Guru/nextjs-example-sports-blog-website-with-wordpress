import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    useColorMode,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import { getHeaderMenuByName } from '../../lib/api';
import { useEffect, useState } from 'react';
import Link from 'next/link'
import { HelperData } from '../../helpers/helper-data'
import Image from 'next/image';
import { FaSun, FaMoon, FaInstagram, FaFacebook, FaTelegram, FaYoutube } from 'react-icons/fa'
import Headroom from 'react-headroom'

function Header({ menu }) {
    const { isOpen, onToggle } = useDisclosure();

    const { helperData } = HelperData()

    const { toggleColorMode } = useColorMode()

    const menuItems = menu.menuItems.edges
    //console.log("menu =", menuItems)


    return (
        <Headroom>
            <Box>
                <Flex
                    bg={useColorModeValue('white', 'gray.800')}
                    color={useColorModeValue('gray.600', 'white')}
                    minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'center'}>
                    <Flex
                        flex={{ base: 1, md: 'auto' }}
                        ml={{ base: -2 }}
                        display={{ base: 'flex', md: 'none' }}>
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                            }
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>
                    <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                        <Link href="/">
                            {
                                helperData.isDark ? (
                                    <Image
                                        src="https://babacricnews.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/05/07112007/baba-logo-white.png"
                                        alt="BabaCric Logo"
                                        width={128}
                                        height={27.75}
                                    />
                                ) : (
                                    <Image
                                        src="https://babacricnews.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/05/07112004/baba-logo-wide.png"
                                        alt="BabaCric Logo"
                                        width={128}
                                        height={27.75}
                                    />
                                )
                            }
                        </Link>

                        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                            <DesktopNav menuItems={menuItems} />
                        </Flex>
                    </Flex>

                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={{ base: 1, md: 6 }}>

                        <IconButton ml={8} icon={helperData.isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>

                        <IconButton onClick={() => window.open("https://telegram.me/baba_cric", "_blank")} ml={8} icon={<FaTelegram />} isRound="true" ></IconButton>

                        <IconButton onClick={() => window.open("https://www.instagram.com/baba_cric/", "_blank")} ml={8} icon={<FaInstagram />} isRound="true"></IconButton>

                        <IconButton onClick={() => window.open("https://www.youtube.com/c/BabaCric", "_blank")} display={{ base: 'none', md: 'flex' }} ml={8} icon={<FaYoutube />} isRound="true" ></IconButton>
                    </Stack>
                </Flex>

                <Collapse in={isOpen} animateOpacity>
                    <MobileNav menuItems={menuItems} onToggle={onToggle} />
                </Collapse>
            </Box>
        </Headroom>
    );
}

const DesktopNav = ({ menuItems }) => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
            {menuItems.map((navItem) => (
                <Box key={navItem.node.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.node.path ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.node.label}
                            </Link>
                        </PopoverTrigger>


                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};



const MobileNav = ({ menuItems, onToggle }) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {menuItems.map((navItem) => (
                <MobileNavItem key={navItem.node.label} label={navItem.node.label} href={navItem.node.path} onToggle={onToggle} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, href, onToggle }) => {



    return (
        <Stack spacing={4} onClick={onToggle}>
            <Link href={href}>
                <Flex
                    py={2}
                    justify={'space-between'}
                    align={'center'}
                    _hover={{
                        textDecoration: 'none',
                    }}>

                    <Text
                        fontWeight={600}
                        color={useColorModeValue('gray.600', 'gray.200')}
                    // onClick={onToggle}
                    >
                        {label}

                    </Text>
                </Flex>
            </Link>


        </Stack>
    );
};


const NAV_ITEMS = [
    {
        label: 'Inspiration',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },
    {
        label: 'Find Work',
        children: [
            {
                label: 'Job Board',
                subLabel: 'Find your dream design job',
                href: '#',
            },
            {
                label: 'Freelance Projects',
                subLabel: 'An exclusive list for contract work',
                href: '#',
            },
        ],
    },
    {
        label: 'Learn Design',
        href: '#',
    },
    {
        label: 'Hire Designers',
        href: '#',
    },
];



export default Header;
