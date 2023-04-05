import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderAppBar = styled(AppBar)`
  &.MuiAppBar-root{
    background-color: ${({ theme }) => theme.palette.background.paper};
    box-shadow: 0px 5px 4px rgba(0,0,0,0.05);
    color: ${({ theme }) => theme.palette.text.secondary}
  }
`;

export const HeaderLogo = styled("img")``;