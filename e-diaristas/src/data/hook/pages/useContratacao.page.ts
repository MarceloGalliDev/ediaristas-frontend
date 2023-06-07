import { 
  CadastroClienteFormDataInterface, 
  CredenciaisInterface, 
  LoginFormDataInterface, 
  NovaDiariaFormDataInterface, 
  PagamentoFormDataInterface 
} from 'data/@types/FormInterface';
import { useContext, useEffect, useMemo, useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { FormSchemaService } from "data/services/FormSchemaService";
import { ServicoInterface } from "data/@types/ServicoInterface";
import useSwr from 'swr'
import useApi from '../useApi.hook';
import { DiariaInterface } from 'data/@types/DiariaInterface';
import { ValidationService } from 'data/services/ValidationService';
import { DateService } from 'data/services/DateService';
import { houseParts } from '@partials/encontrar-diarista/_detalhe-servico';
import { ExternalServiceContext } from 'data/contexts/ExternalServiceContext';
import { ApiService, linksResolver } from 'data/services/ApiService';


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
  const { totalTime, tamanhoCasa, totalPrice } = useMemo<{
    totalTime: number;
    tamanhoCasa: string[];
    totalPrice: number;
  }>(() => {
    return {
      totalTime: calcularTempoServico(dadosFaxina, tipoLimpeza),
      tamanhoCasa: listarComodos(dadosFaxina),
      totalPrice: calcularPreco(dadosFaxina, tipoLimpeza),
    };
  }, [
    tipoLimpeza,
    dadosFaxina,
    dadosFaxina?.quantidade_banheiros,
    dadosFaxina?.quantidade_cozinhas,
    dadosFaxina?.quantidade_outros,
    dadosFaxina?.quantidade_quartos,
    dadosFaxina?.quantidade_quintais,
    dadosFaxina?.quantidade_salas,
  ]),//vamos executar quando tivermos o tipo de limpeza alterado, o ? é pelo fato que pode ser undefined os campos apresentados acima
  //função que calcula o serviço

  cepFaxina = serviceForm.watch('endereco.cep'),
  [podemosAtender, setPodemosAtender] = useState(false),
  { externalServicesState } = useContext(ExternalServiceContext);

  useEffect(() => {
    //verificar_disponibilidade_atendimento, vindo lá da API
    const cep = (cepFaxina ?? '').replace(/\D/g, '')
    if (ValidationService.cep(cep)) {
      const linkDisponibilidade = linksResolver(
        externalServicesState.externalService,
        'verificar_disponibilidade_atendimento'
      );

      if (linkDisponibilidade) {
        ApiService.request({
          url: linkDisponibilidade.uri,
          method: linkDisponibilidade.type,
          params: { cep },
        })
          .then((response) => setPodemosAtender(true)) //esperamos uma resposta da api
          .catch((_erro) => setPodemosAtender(false)); //retorno um catch em caso de erro
      }
    } else {
      setPodemosAtender(false);
    }
  }, [cepFaxina, externalServicesState.externalService]);

  useEffect(() => {
    if(dadosFaxina && ValidationService.hora(dadosFaxina.hora_inicio) && totalTime >= 0 ) {
      serviceForm.setValue('faxina.hora_inicio', dadosFaxina?.hora_inicio, {shouldValidate: true});//shouldValidate serve para validar os campos do formulário
      serviceForm.setValue('faxina.data_atendimento', dadosFaxina?.data_atendimento, {shouldValidate: true});//shouldValidate serve para validar os campos do formulário
      serviceForm.setValue('faxina.hora_termino', DateService.addHours(dadosFaxina?.hora_inicio as string, totalTime), {shouldValidate: true});//shouldValidate serve para validar os campos do formulário
    } else {
      serviceForm.setValue('faxina.hora_termino', '') //aqui usamos o setValue para fazer a alteração no campo de faxina.hora_termino
    }
  }, [totalTime, dadosFaxina?.hora_inicio, dadosFaxina?.data_atendimento, dadosFaxina?.hora_termino])

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
  };

  function calcularPreco(
    dadosFaxina: DiariaInterface, 
    tipoLimpeza: ServicoInterface
  ): number {
    let total = 0
    if(dadosFaxina && tipoLimpeza){
      total += tipoLimpeza.valor_banheiro * dadosFaxina.quantidade_banheiros;
      total += tipoLimpeza.valor_cozinha * dadosFaxina.quantidade_cozinhas;
      total += tipoLimpeza.valor_outros * dadosFaxina.quantidade_outros;
      total += tipoLimpeza.valor_quarto * dadosFaxina.quantidade_quartos;
      total += tipoLimpeza.valor_quintal * dadosFaxina.quantidade_quintais;
      total += tipoLimpeza.valor_sala * dadosFaxina.quantidade_salas;
    }
    return Math.max(total, tipoLimpeza.valor_minimo);//valor minimo vem da api, calcula para testar o valor minimo
  };

  function listarComodos(dadosFaxina: DiariaInterface): string[] {
    const comodos: string[] = [];

    if(dadosFaxina){
      houseParts.forEach((housePart) => {
        const total = dadosFaxina[housePart.name as keyof DiariaInterface] as number;
        if(total > 0) {
          const nome = total > 1 ? housePart.plural : housePart.singular;
          comodos.push(`${total} ${nome}`);
        }
      });
    }//vamos usar o forEach, para criar a quantidade total de serviçoes, keyof DiariaInterface é para identificar o parametro e colocar como uma key do forEach

    return comodos;
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
    tamanhoCasa,
    tipoLimpeza,
    totalPrice,
    podemosAtender,
  };
}