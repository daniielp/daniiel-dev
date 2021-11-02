import MainLayout from '../Layouts/MainLayout'
import RouteWithLayout from '../Layouts/RouteWithLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from "react";
import { CssBaseline, ThemeProvider } from '@material-ui/core'

import '../styles/global.css'

import theme from '../utils/theme'

function MyApp({ Component, pageProps }: {Component : any, pageProps: any}) {
  const { pathname } = useRouter();

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, [])

  if (pathname.startsWith("/admin")) return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Daniel Pedersen - Dashboard</title>
        <meta name="robots" content="noindex" />
      </Head>
      <RouteWithLayout Layout={MainLayout} Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  )

  return (
    <>
      <Head>
        <title>Daniel Pedersen - Webdeveloper</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="With a background as a web developer and a good eye to UI/UX. Daniel Pedersen create groth and is dedicated to frontend development." />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouteWithLayout Layout={MainLayout} Component={Component} pageProps={pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
