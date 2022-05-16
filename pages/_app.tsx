import MainLayout from '../Layouts/MainLayout'
import PolicyLayout from '../Layouts/PolicyLayout'
import RouteWithLayout from '../Layouts/RouteWithLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';
import '../styles/global.css'
import createCache from '@emotion/cache';
import { CacheProvider } from "@emotion/react";

import theme from '../utils/theme';
import Script from 'next/script'

const responsiveTheme = responsiveFontSizes(theme);

const clientSideEmotionCache = createCache({ key: 'css' });

function MyApp(props: any) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    const { pathname } = useRouter();

    // if (pathname.startsWith("/admin")) return (
    //     <CacheProvider value={emotionCache}>
    //         <Head>
    //             <title>Daniel Pedersen - Dashboard</title>
    //             <meta name="viewport" content="initial-scale=1, width=device-width" />
    //             <meta name="robots" content="noindex" />
    //             <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`} />
    //         </Head>
    //         <ThemeProvider theme={responsiveTheme}>
    //             <CssBaseline />
    //             <RouteWithLayout Layout={MainLayout} Component={Component} pageProps={pageProps} />
    //         </ThemeProvider>
    //     </CacheProvider>
    // );

    if (pathname.startsWith("/policies")) return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>Daniel Pedersen - Policies</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <meta name="robots" content="noindex" />
            </Head>
            <ThemeProvider theme={responsiveTheme}>
                <CssBaseline />
                <RouteWithLayout Layout={PolicyLayout} Component={Component} pageProps={pageProps} />
            </ThemeProvider>
        </CacheProvider>
    )

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>Daniel Pedersen - Webdeveloper</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description"
                    content="With a background as a web developer and a good eye to UI/UX. Daniel Pedersen create groth and is dedicated to frontend development." />
                    <meta name="keywords" content="daniel pedersen, web developer, development, web design, website, daniel, pedersen, freelance" />
                {/* <script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`}/> */}

            </Head>
            <ThemeProvider theme={responsiveTheme}>
                <Script src={"https://www.google.com/recaptcha/api.js?render=" + process.env.NEXT_PUBLIC_RECAPTCHA_KEY} ></Script>
                <CssBaseline />
                <RouteWithLayout Layout={MainLayout} Component={Component} pageProps={pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MyApp
