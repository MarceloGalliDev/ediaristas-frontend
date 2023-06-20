import { styled } from '@mui/material/styles';
//import { } from '@mui/material/';
//import { DiariasProps } from './Diarias'

export const ComponentName = styled('div')`
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.background.default};
  font-size: 12px;
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2, 0)};
  font-family: ${({ theme }) => theme.typography.fontFamily}
`;