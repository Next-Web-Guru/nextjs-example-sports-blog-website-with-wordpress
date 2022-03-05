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
import { useEffect } from 'react'


const MyApp = ({ Component, pageProps }) => {

  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "9a3c73d8-b519-47fe-b41b-c7bf44082c98",
        safari_web_id: "web.onesignal.auto.10bba952-d3e6-4be7-b269-bd5caae877a4",
        notifyButton: {
          enable: true,
        },
      });
    });

    return () => {
      window.OneSignal = undefined;
    };
  }, []); // <-- run this effect once on mount

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

      <Script src='https://cdn.onesignal.com/sdks/OneSignalSDK.js' strategy="afterInteractive" />

      <Script strategy="afterInteractive" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5783794107508214"
        crossorigin="anonymous" />

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



