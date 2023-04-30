import { Button, Container, Typography } from '@mui/material';
import PageTitle from 'UI/components/data-display/PageTitle/PageTitle';
import SafeEnvironment from 'UI/components/feedback/SafeEnvironment/SafeEnvironment';
import React, { PropsWithChildren } from 'react';
//import {  } from 'react';
import { FormElementsContainer } from "./_verificar-profissionais.styled"; 
import TextFieldMask from 'UI/components/inputs/TextFieldMask/TextFieldMask';

const VerificarProfissionais: React.FC<PropsWithChildren> = () => {
  return (
    <>
      <SafeEnvironment />
      <PageTitle title='Conheça os profissionais' subtitle='Preencha seu CEP e veja todos profissionais de sua localidade'/>
      <Container sx={{mb: 10}}>
        <FormElementsContainer>
          <TextFieldMask mask={'99999-999'} label={'Digite seu CEP'} fullWidth/>
          <Typography color={'error'}>CEP não encontrado!</Typography>
          <Button variant={'contained'} color={'secondary'} sx={{width: '220px'}}>
            Buscar
          </Button>
        </FormElementsContainer>
      </Container>
    </>
  );
};

export default VerificarProfissionais;