//aqui vamos criar um breakpoint para o type device
import { useTheme, useMediaQuery } from "@mui/material";

export default function useIsMobile(): boolean {
  const theme = useTheme();//acesso ao theme
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));// aqui estamos selecionando o tamanho do dispositivo, do md para baixo estamos no mobile, se não estamos no pc, é do tipo boleano, esta la no light-theme o md.
  return isMobile

}