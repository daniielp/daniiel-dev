import MainLayout from '../Layouts/MainLayout'
import PolicyLayout from '../Layouts/PolicyLayout'
import RouteWithLayout from '../Layouts/RouteWithLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from "react";
import { CssBaseline, ThemeProvider, StyledEngineProvider } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import '../styles/global.css'




let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#f7d952",
      main: '#f5d027',
      dark: "#EEB200",
      contrastText: '#272c3a',
    },
    secondary: {
      light: "#5f6576",
      main: '#383f54',
      dark: "#272c3a",
      contrastText: "#bdbdbd",
    },
    text: {
      primary: "#fefefe",
      secondary: "#707070",
    },
    background: {
      default: "#383f54",
    },
  },
  typography: {
    fontFamily: [
      'Anonymous Pro',
      'monospace',
    ].join(","),
    body1: {
      fontFamily: [
        "Roboto",
        "Helvetica",
        'sans-serif',
      ].join(","),
    },
    body2: {
      fontFamily: [
        "Roboto",
        "Helvetica",
        'sans-serif',
      ].join(","),
    },
  }
});

theme = responsiveFontSizes(theme);

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
  const { pathname } = useRouter();

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, [])

  if (pathname.startsWith("/admin")) return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <title>Daniel Pedersen - Dashboard</title>
          <meta name="robots" content="noindex" />
        </Head>
        <RouteWithLayout Layout={MainLayout} Component={Component} pageProps={pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );

  if (pathname.startsWith("/policies")) return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <title>Daniel Pedersen - Policies</title>
          <meta name="robots" content="noindex" />
        </Head>
        <RouteWithLayout Layout={PolicyLayout} Component={Component} pageProps={pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  )

  return <>
    <Head>
      <title>Daniel Pedersen - Webdeveloper</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="With a background as a web developer and a good eye to UI/UX. Daniel Pedersen create groth and is dedicated to frontend development." />
    </Head>
    {/* <StyledEngineProvider injectFirst> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouteWithLayout Layout={MainLayout} Component={Component} pageProps={pageProps} />
      </ThemeProvider>
    {/* </StyledEngineProvider> */}
  </>;
}

export default MyApp
