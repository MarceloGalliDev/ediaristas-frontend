import { Button, Container, Typography } from '@mui/material';
import DataList from 'UI/components/data-display/DataList/DataList';
import PageTitle from 'UI/components/data-display/PageTitle/PageTitle';
import Status from 'UI/components/data-display/Status/Status';
import Table, { TableCell, TablePagination, TableRow } from 'UI/components/data-display/Table/Table';
import LinkV2 from 'UI/components/navigation/Links/LinksV2';
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
    <Container sx={{mb:5, p:0}}>
      <PageTitle title='Minhas diárias'/>
      {filteredData.length > 0 ? (
        isMobile ? (
          <>
            {filteredData.map((item) => {
              return (<DataList 
                key={item.id}
                header={
                  <>
                    Data: {TextFormatService.reverseDate(item.data_atendimento as string)}
                    <br/>
                    {item.nome_servico}
                  </>
                }
                body={
                  <>
                    Status: {DiariaService.getStatus(item.status!).label}
                    <br/>
                    Valor: {TextFormatService.currency(item.preco)}
                  </>
                }

                actions={
                  <>
                    <Button 
                      component={LinkV2} 
                      href=''
                      color={'inherit'}
                      variant={'outlined'}
                    >
                      Detalhes
                    </Button>

                    <Button
                      color={'error'}
                      variant={'contained'}
                    >
                      Cancelado
                    </Button>
                  </>
                }
              />
              )
            })}
          </>
        ) : (
          <>
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
                    
                  <TableCell>
                    {item.nome_servico}
                  </TableCell>

                  <TableCell>
                    {TextFormatService.currency(item.preco)}
                  </TableCell>

                  <TableCell>
                    <LinkV2 href={''}>Detalhes</LinkV2>
                  </TableCell>

                  <TableCell>
                    <Button color={'error'}>Cancelar</Button>
                  </TableCell>

                </TableRow>
              )}
            />
            <TablePagination 
              count={totalPages}
              page={currentPage}
              onChange={(_evento, nextPage) => setCurrentPage(nextPage)}
            />
          </>
        )
      ) : (
        <Typography align="center">Nenhuma diária ainda</Typography>
      )}
    </Container>
  );
};

zzzzzzzzzzzzzzzzzzzzzzzzz