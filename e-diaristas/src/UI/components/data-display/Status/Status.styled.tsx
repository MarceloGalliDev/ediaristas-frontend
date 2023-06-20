import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material/';
//import { StatusProps } from './Status'

export const StatusStyled = styled(Typography)`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  display: inline-block;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  padding: ${({ theme }) => theme.spacing(1, 2)};
  color: white;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  vertical-align: middle;
  
`;