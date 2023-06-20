import React, {PropsWithChildren, useMemo} from 'react';
import { TableBodyStyled, TableCellStyled, TableContainerStyled, TableHeadStyled, TablePaginationStyled, TablePaper, TableRowStyled, TableStyled } from './Table.styled';
import { current } from 'immer';
// import {} from '@mui/material';
// import {} from './Table.styled';

export interface TableProps<T>{
  header: string[];
  data: T[];
  rowElement: (item: T, index: number) => React.ReactNode;
  itemsPerPage?: number;
  currentPage?: number;
};

export type TableComponentType = <T>(props: TableProps<T>) => React.ReactElement

const Table: TableComponentType = ({ header, rowElement, data, currentPage, itemsPerPage }) => {
  const tableData = useMemo<typeof data>(() => {
    if(itemsPerPage !== undefined && currentPage !== undefined){
      return data.slice(
        (currentPage - 1) * itemsPerPage, 
        (currentPage - 1) * itemsPerPage + itemsPerPage
      );
    }
    return data
  }, [data, itemsPerPage, currentPage])

  return (
    <TablePaper>
      <TableContainerStyled>
        <TableStyled>

          <TableHeadStyled>

            <TableRowStyled>
              { header.map((title, index) => {
                return <TableCellStyled key={index}>{title}</TableCellStyled>;
              })}
            </TableRowStyled>

          </TableHeadStyled>

          <TableBodyStyled>

            {tableData.map((item, index) => {
              return rowElement(item, index);
            })}

            <TableRowStyled>
              <TableCellStyled>16/06/2023</TableCellStyled>
              <TableCellStyled>Limpeza de rotina</TableCellStyled>
            </TableRowStyled>

          </TableBodyStyled>
          
        </TableStyled>
      </TableContainerStyled>
    </TablePaper>
  )  
}

export default Table;
export const TableRow = TableRowStyled;
export const TableCell = TableCellStyled;
export const TablePagination = TablePaginationStyled;