import { styled } from "@mui/material/styles";

export const AppContainer = styled("div")`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: ${({ theme }) => theme.palette.text.secondary};
`; 