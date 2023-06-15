import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
//import { } from '@mui/material/';
//import { LoginProps } from './Login'

export const LoginContainer = styled('div')`
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.background.default};
  font-size: 12px;
  padding: ${({ theme }) => theme.spacing(2, 0)};
  font-family: ${({ theme }) => theme.typography.fontFamily};

  display: grid;
  grid-template-columns: minmax(200px, 650px);
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(6, 2)};
  margin: ${({ theme }) => theme.spacing(4)};
`;

export const LoginButton = styled(Button)`
  width: 226px;
  justify-self: center;
  margin-top: ${({ theme }) => theme.spacing(4)};
`;