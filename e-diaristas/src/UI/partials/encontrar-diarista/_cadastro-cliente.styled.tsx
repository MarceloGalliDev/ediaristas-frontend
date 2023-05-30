import { styled } from '@mui/material/styles';
//import { } from '@mui/material/';
//import { CadastroClienteProps } from './CadastroCliente'

export const LoginButtonsContainer = styled('div')`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => theme.breakpoints.down('md')}{
    flex-direction: column;
    margin: 0 auto;
    max-width: 300px;
  }
`;
