import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
//import { } from '@mui/material/';
//import { LoginProps } from './Login'

export const LoginContainer = styled('div')`
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.background.default};
  font-size: 12px;
  padding: ${({ theme }) => theme.spacing(2, 0)};
  font-family: ${({ theme }) => theme.typography.fontFamily}
`;

export const LoginButton = styled(Button)``;