import "@styles/globals.css";
import type { AppProps } from "next/app"
import { CircularProgress, Container, ThemeProvider } from "@mui/material"; 
import theme from "../UI/themes/theme"
import Header from "UI/components/surfaces/Header/Header";
import Footer from "UI/components/surfaces/Footer/Footer";
import React, { useContext } from 'react';
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../data/services/createEmotionCache";
import { AppContainer } from "@styles/pages/AppContainer.styled";
import { MainProvider } from "data/contexts/MainContext";
import useRouterGuard, { privateRoutes } from "data/hook/useRouterGuard.hook";
import { UserContext } from "data/contexts/UserContext";
import { LoginService } from "data/services/LoginService";

const clientSideEmotionCache = createEmotionCache();
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
};

function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { userState } = useContext(UserContext);
  const router = useRouterGuard(userState.user, userState.isLogging);

  function canShow(): boolean {
    if (privateRoutes.includes(router.pathname)) {
      if (userState.isLogging) {
        return false;
      }
      return userState.user.nome_completo.length > 0;
    }
    return true;
  }

  async function onLogout() {
    await LoginService.logout();
    window.location.reload();
  }
  
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>E-Diaristas</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer>
          <Header />
          <main>
            {canShow() ? (
              <Component {...pageProps} />
            ) : (
              <Container
                sx={{ textAlign: 'center', my:10 }}
              >
                <CircularProgress />
              </Container>
            )}
          </main>
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </CacheProvider>
  );
};

//quando for chamado o App, ele automaticamente vai chamar essa constante e executara a função App dentro do contexto
const AppProviderContainer:React.FC<AppProps> = (props) => {
  return(
    <MainProvider>
      <App {...props}/>
    </MainProvider>
  )
};

export default AppProviderContainer;