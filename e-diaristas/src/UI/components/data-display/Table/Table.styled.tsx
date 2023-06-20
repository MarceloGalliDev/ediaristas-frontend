import { styled } from '@mui/material/styles';
import { 
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Pagination,
  Paper,
} from '@mui/material/';
//import { TableProps } from './Table'

//segue o padrão de excel
//container base
export const TablePaper = styled(Paper)`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  padding: ${({ theme }) => theme.spacing(0,4)};
`;

export const TableStyled = styled(Table)`
  font-family: ${({ theme }) => theme.typography.fontFamily};

  &.MuiTable-root {
    border-collapse: separate;
    border-spacing: ${({ theme }) => theme.spacing(0, 3)};
  }
`;

//cabeçalho - header
export const TableHeadStyled = styled(TableHead)`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  text-transform: uppercase;

  .MuiTableCell-root {
    font-weight: bold;
  }
`;

//corpo da tabela
export const TableBodyStyled = styled(TableBody)`
  font-family: ${({ theme }) => theme.typography.fontFamily};

  .MuiTableRow-root {
    background-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;

//celulas de cada linha
export const TableCellStyled = styled(TableCell)`
  font-family: ${({ theme }) => theme.typography.fontFamily};

  &.MuiTableCell-root {
    border: none;
    padding: ${({ theme }) => theme.spacing(1, 4)};
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

//paginação da página
export const TablePaginationStyled = styled(Pagination)`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  display: flex;
  justify-content: flex-end;
  margin: ${({ theme }) => theme.spacing(4)};
`;


export const TableContainerStyled = styled(TableContainer)`
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

//container da linha da tabela
export const TableRowStyled = styled(TableRow)`
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;