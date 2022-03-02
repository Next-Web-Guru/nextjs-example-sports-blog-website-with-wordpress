import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const PrimeMembeershipCard = () => {
    return (
        <Center py={6}>
            <Box
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Stack
                    textAlign={'center'}
                    p={6}
                    color={useColorModeValue('gray.800', 'white')}
                    align={'center'}>
                    <Text
                        fontSize={'md'}
                        fontWeight={500}
                        bg={useColorModeValue('green.50', 'green.900')}
                        p={2}
                        px={3}
                        color={'green.500'}
                        rounded={'full'}>
                        Dream11 winning teams on Telegram
                    </Text>
                    <Stack direction={'row'} align={'center'} justify={'center'}>
                        <Text fontSize={'3xl'}>₹</Text>
                        <Text fontSize={'6xl'} fontWeight={800}>
                            0
                        </Text>
                        <Text color={'gray.500'}>/month</Text>
                    </Stack>
                </Stack>

                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={0}>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            1 safe and 5 GL teams
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            3 to 4 grand league winning tips every month
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            YouTube video prediction
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            Covering all international and top league matches
                        </ListItem>
                    </List>

                    <Button
                        mt={10}
                        mb={2}
                        w={'full'}
                        bg={'green.400'}
                        color={'white'}
                        rounded={'xl'}
                        boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                        _hover={{
                            bg: 'green.500',
                        }}
                        _focus={{
                            bg: 'green.500',
                        }}>
                        Join Telegram Channel Now
                    </Button>
                </Box>
            </Box>
        </Center>
    );
}

export default PrimeMembeershipCard;
