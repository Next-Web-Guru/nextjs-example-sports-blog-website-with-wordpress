import { ChakraProvider, CSSReset, ColorModeScript, theme, ThemeProvider } from '@chakra-ui/react'
import Container from '../components/container'
import Layout from '../components/layout'
//import MainLayout from '../components/layout/main-layout'
import '../styles/index.css'
import '../styles/gutenberg/style.css'
import '../styles/gutenberg/theme.css'
import Head from 'next/head'


const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta data-rh="true" name="google-site-verification" content="3FCgkBGO8Qfael6rkqbx7be0JHNduxct6Xc7TFsc5_0" />
        <meta data-rh="true" name="facebook-domain-verification" content="vylwdr385iepjfnp4mkn0s77p6p94b" />
      </Head>

      <ChakraProvider>
        <ColorModeScript initialColorMode="default"></ColorModeScript>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}


export default MyApp



