import "@styles/globals.css";
import type { AppProps } from "next/app"
import { ThemeProvider } from "@mui/material"; 
import theme from "../UI/themes/theme"
import Header from "UI/components/surfaces/Header/Header";
import Footer from "UI/components/surfaces/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}
