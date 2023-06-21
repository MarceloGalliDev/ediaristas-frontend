import { Typography } from '@mui/material';
import Status from 'UI/components/data-display/Status/Status';
import Table, { TableCell, TableRow } from 'UI/components/data-display/Table/Table';
import useMinhasDiarias from 'data/hook/pages/diarias/useMinhasDiarias.page';
import { DiariaService } from 'data/services/DiariaService';
import { TextFormatService } from 'data/services/TextFormatService';
import React, { PropsWithChildren } from 'react';
//import {  } from 'react';
//import { ComponentName } from './_minhas-diarias.styled'; 

const MinhasDiarias: React.FC<PropsWithChildren> = () => {
  const {
    isMobile,
    currentPage,
    setCurrentPage,
    totalPages,
    itemsPerPage,
    filteredData,
  } = useMinhasDiarias(); 

  return (
    <div>
      {filteredData.length > 0 ? (
        isMobile ? (
          ''
        ) : (
          <Table
            header={['Data', 'Status', 'Tipo de serviço', 'Valor', '', '']}
            data={filteredData}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            rowElement={(item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <strong>
                    {TextFormatService.reverseDate(
                      item.data_atendimento as string
                    )}
                  </strong>
                </TableCell>

                <TableCell>
                  <Status colors={DiariaService.getStatus(item.status!).color}>
                    {DiariaService.getStatus(item.status!).label}
                    {item.status}
                  </Status>
                </TableCell>
              </TableRow>
            )}
          />
        )
      ) : (
        <Typography align="center">Nenhuma diária ainda</Typography>
      )}
      <div>MinhasDiarias</div>
    </div>
  );
};

export default MinhasDiarias;