import { Button, Typography, Container } from '@mui/material';
import PageTitle from 'UI/components/data-display/PageTitle/PageTitle';
import SafeEnvironment from 'UI/components/feedback/SafeEnvironment/SafeEnvironment';
import React, { PropsWithChildren } from 'react';
//import {  } from 'react';
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "./_verificar-profissionais.styled"; 
import TextFieldMask from 'UI/components/inputs/TextFieldMask/TextFieldMask';
import UserInformation from 'UI/components/data-display/UserInformation/UserInformation';
import { color } from '@storybook/theming';

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
        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation 
              name='Marcelo Galli'
              picture='https://github.com/MarceloGalliDev.png'
              rating={3}
              description='Full Stack developer'
            />
            <UserInformation 
              name='Marcelo Galli'
              picture='https://github.com/MarceloGalliDev.png'
              rating={4}
              description='Full Stack developer'
            />
            <UserInformation 
              name='Marcelo Galli'
              picture='https://github.com/MarceloGalliDev.png'
              rating={5}
              description='Full Stack developer'
            />
          </ProfissionaisContainer>
          <Container sx={{ textAlign: "center"}}>
            <Typography variant={'body2'} color={"textSecondary"} sx={{ mt: 5 }}>
              ... mostrar mais
            </Typography>
            <Button variant={'contained'} color={'secondary'} sx={{ mt: 5}}>
              Contratar um(a) profissional
            </Button>
          </Container>
        </ProfissionaisPaper>
      </Container>
    </>
  );
};

export default VerificarProfissionais;