import { CadastroClienteFormDataInterface, CredenciaisInterface, LoginFormDataInterface, NovaDiariaFormDataInterface, PagamentoFormDataInterface } from 'data/@types/FormInterface';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { FormSchemaService } from "data/services/FormSchemaService";
import { ServicoInterface } from "data/@types/ServicoInterface";


export default function useContratacao() {
  const [ step, setStep ] = useState(3);
  const [ hasLogin, setHasLogin ] = useState(false);
  const [loginErro, setLoginErro ] = useState(''); 
  const breadcrumbItems = ['Detalhes da diária', 'Identificação', 'Pagamento'];

  const serviceForm = useForm<NovaDiariaFormDataInterface>({
    resolver: yupResolver(
      FormSchemaService.address().concat(FormSchemaService.detalheServico())
    )
  });

  const clientForm = useForm<CadastroClienteFormDataInterface>({
    resolver: yupResolver(
      FormSchemaService.userData().concat(FormSchemaService.newContact())
    )
  });

  const loginForm = useForm<LoginFormDataInterface<CredenciaisInterface>>({
    resolver: yupResolver(FormSchemaService.login())
  });

  const paymentForm = useForm<PagamentoFormDataInterface>({
    resolver: yupResolver(FormSchemaService.payment())
  });

  const servicos: ServicoInterface[] = [
    {
      id: 0,
      nome: 'Limpeza comum',
      icone: 'twf-cleaning-1',
      horas_banheiro: 1,
      horas_cozinha: 1,
      horas_outros: 1,
      horas_quarto: 1,
      horas_quintal: 1,
      horas_sala: 1,
      porcentagem_comissao: 10,
      qtd_horas: 2,
      valor_banheiro: 20,
      valor_cozinha: 20,
      valor_minimo: 20,
      valor_outros: 20,
      valor_quarto: 20,
      valor_quintal: 20,
      valor_sala: 20,
    },
  ];
  
  function onServiceFormSubmit(data: NovaDiariaFormDataInterface) {
    console.log(data)
  };

  function onClientFormSubmit(data: CadastroClienteFormDataInterface) {
    console.log(data)
  };

  function onLoginFormSubmit(data: LoginFormDataInterface<CredenciaisInterface>) {
    console.log(data)
  };

  function onPaymentFormSubmit(data: PagamentoFormDataInterface ) {
    console.log(data);
  };

  return {
    step,
    setStep,
    breadcrumbItems,
    servicos,
    serviceForm,
    onServiceFormSubmit,
    hasLogin,
    setHasLogin,
    clientForm,
    onClientFormSubmit,
    loginForm,
    loginErro,
    onLoginFormSubmit,
    paymentForm,
    onPaymentFormSubmit,
  };
}