import { Typography } from '@mui/material';
import { UserDataForm } from 'UI/components/inputs/UserForm/UserForm';
import React, { PropsWithChildren } from 'react';
//import {  } from 'react';
//import { ComponentName } from './_cadastro-cliente.styled'; 

const CadastroCliente: React.FC<PropsWithChildren> = () => {
  return(
    <div>
      <Typography sx={{ fontWeight: 'bold', pb: 2}}>
        Dados Pessoais
      </Typography>
      <UserDataForm></UserDataForm>
    </div>
  )
};

export default CadastroCliente;