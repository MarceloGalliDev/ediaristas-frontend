import { AppBar, Drawer, AppBarProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderAppBar = styled((props: AppBarProps) => (
  <AppBar position="sticky" {...props}/>
))`
  &.MuiAppBar-root {
    background-color: ${({ theme }) =>
      theme.palette.background.paper}; //aqui acessamos o theme
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  .MuiToolbar-root {
    display: grid;
    grid-template-columns: 52px auto 52px;
    justify-content: space-between;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiToolbar-root {
      display: grid;
      grid-template-columns: auto auto 1fr auto;
      gap: ${({ theme }) => theme.spacing(9)};
      height: 100px;
    }
  }
`;

export const HeaderLogo = styled("img")`
  height: 25px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 47px;
  }//aqui acessamos o theme apartir medium device
`;

export const ButtonsContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, auto); //função css para repetir parâmetros
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const HeaderDrawer = styled(Drawer)`
  .MuiPaper-root{
    padding: ${({ theme }) => theme.spacing()};
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  .MuiDivider-root{
    margin: ${({ theme }) => theme.spacing(2)};
    border-color: ${({ theme }) => theme.palette.primary.light};
  }
`;
