import { styled } from '@mui/material/styles';
//import { } from '@mui/material/';
//import { DetalheServicoProps } from './DetalheServico'

export const ItemsContainer = styled('div')`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${({ theme }) => theme.spacing(3)};
`;