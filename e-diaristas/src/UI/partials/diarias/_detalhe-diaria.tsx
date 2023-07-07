import { CircularProgress, Container } from '@mui/material';
import PageTitle from 'UI/components/data-display/PageTitle/PageTitle';
import useDetalhesDiaria from 'pages/diarias/useDetalhesDiaria.page';
import React, { PropsWithChildren } from 'react';
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

  return(
    <Container>
      <PageTitle title={`Detalhes da diária: #${id}`}/>
    </Container>
  )
};

export default DetalheDiaria;