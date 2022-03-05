import { ChakraProvider, CSSReset, ColorModeScript, theme, ThemeProvider } from '@chakra-ui/react'
import Container from '../components/container'
import Layout from '../components/layout'
//import MainLayout from '../components/layout/main-layout'
import '../styles/index.css'
import '../styles/gutenberg/style.css'
import '../styles/gutenberg/theme.css'
import Head from 'next/head'
import Script from 'next/script'
import GoogleAnalytics from '../components/GoogleAnalytics'


const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/pwa/manifest.json" />
        <link rel="apple-touch-icon" href="/pwa/ios/50.png" />
        <meta name='mobile-web-app-capable' content='yes' />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        <meta data-rh="true" name="google-site-verification" content="3FCgkBGO8Qfael6rkqbx7be0JHNduxct6Xc7TFsc5_0" />
        <meta data-rh="true" name="facebook-domain-verification" content="vylwdr385iepjfnp4mkn0s77p6p94b" />

      </Head>

      <GoogleAnalytics />

      <ChakraProvider>
        <ColorModeScript initialColorMode="default"></ColorModeScript>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}


export default MyApp



