import MainLayout from '../Layouts/MainLayout'
import PolicyLayout from '../Layouts/PolicyLayout'
import RouteWithLayout from '../Layouts/RouteWithLayout'
import Head from 'next/head'
import {useRouter} from 'next/router'
import React, {useEffect} from "react";
import {CssBaseline, ThemeProvider, StyledEngineProvider} from '@mui/material';
import {createTheme, responsiveFontSizes} from '@mui/material/styles';
import '../styles/global.css'
import createCache from '@emotion/cache';
import {CacheProvider} from "@emotion/react";


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

const clientSideEmotionCache = createCache({key: 'css'});

function MyApp(props: any) {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    const {pathname} = useRouter();

    if (pathname.startsWith("/admin")) return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>Daniel Pedersen - Dashboard</title>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
                <meta name="robots" content="noindex"/>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <RouteWithLayout Layout={MainLayout} Component={Component} pageProps={pageProps}/>
            </ThemeProvider>
        </CacheProvider>
    );

    if (pathname.startsWith("/policies")) return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>Daniel Pedersen - Policies</title>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
                <meta name="robots" content="noindex"/>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <RouteWithLayout Layout={PolicyLayout} Component={Component} pageProps={pageProps}/>
            </ThemeProvider>
        </CacheProvider>
    )

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>Daniel Pedersen - Webdeveloper</title>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="description"
                      content="With a background as a web developer and a good eye to UI/UX. Daniel Pedersen create groth and is dedicated to frontend development."/>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <RouteWithLayout Layout={MainLayout} Component={Component} pageProps={pageProps}/>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MyApp
