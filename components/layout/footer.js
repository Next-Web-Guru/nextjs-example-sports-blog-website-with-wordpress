import { ReactNode } from 'react';
import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    VisuallyHidden,
    chakra,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaTelegram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <Link href={'/about-us/'}>About Us</Link>
                        <Link href={'/disclaimer/'}>Disclaimer</Link>
                        <Link href={'/privacy-policy/'}>Privacy Policy</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Contact Us</ListHeader>
                        <a href="mailto:d11tipsbaba@gmail.com?subject=Contact-">Email us</a>
                        <a target="_blank" href={'https://www.instagram.com/baba_cric/'}>Message on Instagram</a>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Quick Link</ListHeader>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/category/fantasy-cricket/'}>Dream11 Prediction</Link>
                        <Link href={'/category/fantasy-platform/'}>Fantasy Platform</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Install App</ListHeader>
                        <a target="_blank" href={'https://play.google.com/store/apps/details?id=com.babacric.app'}>Android APP</a>
                    </Stack>
                </SimpleGrid>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ md: 'space-between' }}
                    align={{ md: 'center' }}>
                    <Text>© 2021 BabaCric All rights reserved</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Telegram'} href={'https://telegram.me/baba_cric'}>
                            <FaTelegram />
                        </SocialButton>
                        <SocialButton label={'Twitter'} href={'https://twitter.com/BabaCric'}>
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'https://www.youtube.com/c/BabaCric'}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'https://www.instagram.com/baba_cric/'}>
                            <FaInstagram />
                        </SocialButton>
                        <SocialButton label={'Facebook'} href={'https://www.facebook.com/BabaCricFantasy'}>
                            <FaFacebook />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}