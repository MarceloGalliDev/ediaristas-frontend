import { Box, CircularProgress, Container, Typography } from '@mui/material';
import PageTitle from 'UI/components/data-display/PageTitle/PageTitle';
import useDetalhesDiaria from 'pages/diarias/useDetalhesDiaria.page';
import React, { PropsWithChildren } from 'react';
import { CardsContainer, JobDetails, JobTitle, UserCard, UserTitle } from './_detalhe-diaria.styled';
import Status from 'UI/components/data-display/Status/Status';
import { DiariaService } from 'data/services/DiariaService';
import { TextFormatService } from 'data/services/TextFormatService';
import { DateService } from 'data/services/DateService';
import UserInformation from 'UI/components/data-display/UserInformation/UserInformation';
//import {  } from 'react';
//import { ComponentName } from './_detalhe-diaria.styled'; 


//estou recebendo o id pelas propriedades, que será enviada lá para o componente de diarias
const DetalheDiaria: React.FC<PropsWithChildren<{id: string}>> = ({id}) => {
  const { cliente, diaria, diarista} = useDetalhesDiaria(id);

  //se for undefined usar diaria?.id
  if(!diaria.id){
    return (
      <Container sx={{textAlign: 'center', my: 10}}>
        <CircularProgress />
      </Container>
    )
  }

  return (
    <Container>
      <PageTitle title={`Detalhes da diária: #${id}`} />
      <CardsContainer>
        <JobDetails>
          <JobTitle>Detalhes da diária</JobTitle>
          <Box sx={{mb: 2}}>
            Status:{' '}
            <Status colors={DiariaService.getStatus(diaria.status!).color}>
              {DiariaService.getStatus(diaria.status!).label}
            </Status>
          </Box>
          <div>
            Data:{' '}
            <strong>
              {TextFormatService.reverseDate(diaria.data_atendimento as string)}
            </strong>
            <br />
            Horário:{' '}
            <strong>
              {DateService.getTimeFromDate(diaria.data_atendimento as string)}
            </strong>
            <br />
            Endereço:{' '}
            <strong>
              {TextFormatService.getAddress(diaria)}
            </strong>
          </div>
        </JobDetails>
        <UserCard>
          {diarista?.id ? (
            <>
              <UserTitle>Diarista</UserTitle>
              <UserInformation 
                picture={diarista?.foto_usuario ?? ''}
                name={diarista?.nome_completo ?? ''}
                rating={diarista?.reputacao ?? 1}
                sx={{bgcolor: 'inherit', px: 0}}
              />
              <Typography>
                Telefone:{' '}
                {TextFormatService.formatPhoneNumber(diarista?.telefone ?? '')}
              </Typography>
            </>
          ) : (
            <Typography>
              Diarista ainda não selecionado(a)!
            </Typography>
          )}
        </UserCard>
        <UserCard>
          <UserTitle>Cliente</UserTitle>
          <UserInformation 
            picture={cliente?.foto_usuario ?? ''}
            name={cliente?.nome_completo ?? ''}
            rating={cliente?.reputacao ?? 1}
            sx={{bgcolor: 'inherit', px: 0}}
          />
          <Typography>
            Telefone:{' '}
            {TextFormatService.formatPhoneNumber(cliente?.telefone ?? '')}
          </Typography>
        </UserCard>
      </CardsContainer>

    </Container>
  );
};

export default DetalheDiaria;