import { ChakraProvider, CSSReset, ColorModeScript } from '@chakra-ui/react'
// import Container from '../components/container'
// import Layout from '../components/layout'
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
        <link rel="manifest" href="/pwa/manifest.json" />
        <link rel="apple-touch-icon" href="/pwa/ios/50.png" />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />


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



