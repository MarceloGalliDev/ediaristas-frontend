import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#9661ff",
      main: "#6B2AEE",
      dark: "#581ECD"
    },
    secondary: {
      light: "#2BFFF2",
      main: "#02E7D9",
      dark: "#1DD6CB"
    },
    text: {
      primary: "#707070",
      secondary: "#9B9B9B"
    },
    error: {},
    warning: {},
  },
})


export default theme;