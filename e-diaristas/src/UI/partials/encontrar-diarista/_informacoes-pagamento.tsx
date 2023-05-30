import { Button, Container, Typography } from '@mui/material';
import { PaymentForm } from 'UI/components/inputs/UserForm/UserForm';
import React, { PropsWithChildren } from 'react';
//import {  } from 'react';
//import { ComponentName } from './_informacoes-pagamento.styled'; 

const InformacoesPagamento: React.FC<PropsWithChildren> = () => {
  return(
    <div>
      <Typography sx={{ fontWeight: 'bold', pb: 2}}>
        Informações de pagamento
      </Typography>
      <PaymentForm/>
      <Container sx={{ textAlign: 'center'}}>
        <Button
          variant='contained'
          color='secondary'
          type='submit'
        >
          Fazer Pagamento
        </Button>
      </Container>
    </div>
  )
};

export default InformacoesPagamento;