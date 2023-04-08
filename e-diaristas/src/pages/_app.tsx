import "@styles/globals.css";
import type { AppProps } from "next/app"
import { ThemeProvider } from "@mui/material"; 
import theme from "../UI/themes/theme"
import Header from "UI/components/surfaces/Header/Header";
import Footer from "UI/components/surfaces/Footer/Footer";
import * as React from "react";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../data/services/createEmotionCache";
import { AppContainer } from "@styles/pages/AppContainer.styled";

const clientSideEmotionCache = createEmotionCache();
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
};

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>E-Diaristas {pageProps.title && `- ${pageProps.title}`}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </CacheProvider>
  );
};