import { Button, Container, Divider, Typography } from '@mui/material';
import { PictureForm, UserDataForm } from 'UI/components/inputs/UserForm/UserForm';
import { LoginForm } from 'UI/components/inputs/UserForm/forms/LoginForm';
import NewContactForm from 'UI/components/inputs/UserForm/forms/NewContactForm';
import React, { PropsWithChildren } from 'react';
import { LoginButtonsContainer } from './_cadastro-cliente.styled';
//import {  } from 'react';
//import { ComponentName } from './_cadastro-cliente.styled'; 

const CadastroCliente: React.FC<{onBack: () => void}> = ({onBack}) => {
  return (
    <div>
      <Typography sx={{ fontWeight: 'bold', pb: 2 }}>Dados Pessoais</Typography>

      <UserDataForm />

      <Divider sx={{ mb: 5 }} />

      <Typography sx={{ fontWeight: 'bold', pb: 2 }}>
        Hora da self! Envie uma self segurando o documento.
      </Typography>
      <PictureForm />

      <Typography sx={{ pb: 5, pt: 1 }} variant={'body2'}>
        Seus documentos estão sob sigilo, fique tranquilo(a).
      </Typography>

      <Divider sx={{ mb: 5 }} />

      <Typography sx={{ fontWeight: 'bold', pb: 2 }}>
        Dados de acesso.
      </Typography>
      <NewContactForm />

      <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="outlined"
          color="primary"
          type="button"
          onClick={() => onBack()}
        >
          Voltar para detalhes da diária
        </Button>
        <Button variant="contained" color="secondary" type="submit">
          Ir para pagamento
        </Button>
      </Container>
    </div>
  );
};

export const LoginCliente: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div>
      <LoginForm />
      <LoginButtonsContainer>
        <Button
          variant="outlined"
          color="primary"
          type="button"
          onClick={() => onBack()}
        >
          Voltar para detalhes da diária
        </Button>
        <Button variant="contained" color="secondary" type="submit">
          Ir para pagamento
        </Button>
      </LoginButtonsContainer>
    </div>
  );
}

export default CadastroCliente;

//passamos por prop a função do onClick, vindo da página do formProvider de _cadastro