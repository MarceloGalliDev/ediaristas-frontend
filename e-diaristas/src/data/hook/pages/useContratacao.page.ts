import { 
  CadastroClienteFormDataInterface, 
  CredenciaisInterface, 
  LoginFormDataInterface, 
  NovaDiariaFormDataInterface, 
  PagamentoFormDataInterface 
} from 'data/@types/FormInterface';
import { useMemo, useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { FormSchemaService } from "data/services/FormSchemaService";
import { ServicoInterface } from "data/@types/ServicoInterface";
import useSwr from 'swr'
import useApi from '../useApi.hook';
import { DiariaInterface } from 'data/@types/DiariaInterface';


export default function useContratacao() {
  const [ step, setStep ] = useState(1);
  const [ hasLogin, setHasLogin ] = useState(false);
  const [ loginErro, setLoginErro ] = useState(''); 
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

  const servicos = useApi<ServicoInterface[]>('/api/servicos').data;
  const dadosFaxina = serviceForm.watch('faxina');//estamos observando o serviceForm na mudança do estado dde faxina
  const tipoLimpeza = useMemo<ServicoInterface>(() => {
    if(servicos && dadosFaxina?.servico){
      const selectedServico = servicos.find(((servico) => servico.id === dadosFaxina.servico))//find() é usado para retornar um objeto ou elemento que seja igual ao outro

      if(selectedServico) {
        return selectedServico;
      }
    }
    return {} as ServicoInterface;

  }, [servicos, dadosFaxina?.servico]);
  const { totalTime } = useMemo<{totalTime: number}>(() => {
    return { totalTime: calcularTempoServico(dadosFaxina, tipoLimpeza) }
  },[
    tipoLimpeza, 
    dadosFaxina, 
    dadosFaxina?.quantidade_banheiros,
    dadosFaxina?.quantidade_cozinhas,
    dadosFaxina?.quantidade_outros,
    dadosFaxina?.quantidade_quartos,
    dadosFaxina?.quantidade_quintais,
    dadosFaxina?.quantidade_salas,
  ])//vamos executar quando tivermos o tipo de limpeza alterado, o ? é pelo fato que pode ser undefined os campos apresentados acima
  //função que calcula o serviço

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

  function calcularTempoServico(
    dadosFaxina: DiariaInterface, 
    tipoLimpeza: ServicoInterface
  ): number {
    let total = 0
    if(dadosFaxina && tipoLimpeza){
      total += tipoLimpeza.horas_banheiro * dadosFaxina.quantidade_banheiros;
      total += tipoLimpeza.horas_cozinha * dadosFaxina.quantidade_cozinhas;
      total += tipoLimpeza.horas_outros * dadosFaxina.quantidade_outros;
      total += tipoLimpeza.horas_quarto * dadosFaxina.quantidade_quartos;
      total += tipoLimpeza.horas_quintal * dadosFaxina.quantidade_quintais;
      total += tipoLimpeza.horas_sala * dadosFaxina.quantidade_salas;
    }
    return total;
  }

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