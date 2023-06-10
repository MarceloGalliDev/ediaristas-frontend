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
import { DiariaInterface } from 'data/@types/DiariaInterface';
import { ValidationService } from 'data/services/ValidationService';
import { DateService } from 'data/services/DateService';
import { houseParts } from '@partials/encontrar-diarista/_detalhe-servico';
import { ExternalServiceContext } from 'data/contexts/ExternalServiceContext';
import { ApiServiceHateoas, linksResolver } from 'data/services/ApiService';
import useApiHateoas from '../useApi.hook';
import { UserContext } from 'data/contexts/UserContext';
import { UserInterface, UserType } from 'data/@types/UserInterface';
import { TextFormatService } from 'data/services/TextFormatService';
import { LoginService } from 'data/services/LoginService';
import { UserService } from 'data/services/UserService';
import { ApiLinksInterface } from 'data/@types/ApiLinksInterface';
import { CardInterface } from 'pagarme';
import { PaymentService } from 'data/services/PaymentService';


export default function useContratacao() {
  const [ step, setStep ] = useState(1);
  const [ hasLogin, setHasLogin ] = useState(false);
  const [ loginErro, setLoginErro ] = useState(''); 
  const breadcrumbItems = ['Detalhes da diária', 'Identificação', 'Pagamento'];

//----------------------------------------------------------------
//validações dos campos de formulário

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
//----------------------------------------------------------------


//----------------------------------------------------------------
// dados do contexto
  const { externalServicesState } = useContext(ExternalServiceContext);

  const servicos = useApiHateoas<ServicoInterface[]>(externalServicesState.externalService, 'listar_servicos').data;
//----------------------------------------------------------------


//----------------------------------------------------------------
// dados de criação da faxina/serviços

  const dadosFaxina = serviceForm.watch('faxina');//estamos observando o serviceForm na mudança do estado dde faxina

  const tipoLimpeza = useMemo<ServicoInterface>(() => {
    if(servicos && dadosFaxina?.servico){
      const selectedServico = servicos.find((servico) => servico.id === dadosFaxina.servico)//find() é usado para retornar um objeto ou elemento que seja igual ao outro

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
//----------------------------------------------------------------


//----------------------------------------------------------------
// verificação se o cep está disponivel para esse serviço

  cepFaxina = serviceForm.watch('endereco.cep'),
  [podemosAtender, setPodemosAtender] = useState(false),
  { userState, userDispatch } = useContext(UserContext),
  [novaDiaria, setNovaDiaria] = useState({} as DiariaInterface);

  useEffect(() => {
    //verificar_disponibilidade_atendimento, vindo lá da API
    //consultamos o hateos la do back-end
    const cep = (cepFaxina ?? '').replace(/\D/g, '')
    if (ValidationService.cep(cep)) {
      ApiServiceHateoas(
        externalServicesState.externalService,
        'verificar_disponibilidade_atendimento',
        (request) => {
          request<{ disponibilidade: boolean }>({ params: { cep }})
            .then(({ data }) => {
              setPodemosAtender(data.disponibilidade);
            }).catch((_err) => {
              setPodemosAtender(false);
            })
        }
      )
    } else {
      setPodemosAtender(false);
    }
  }, [cepFaxina, externalServicesState.externalService]);
//----------------------------------------------------------------


//----------------------------------------------------------------
// validando as horas de serviço de acordo com selecionado

  useEffect(() => {
    if(dadosFaxina && ValidationService.hora(dadosFaxina.hora_inicio) && totalTime >= 0 ) {
      serviceForm.setValue('faxina.hora_inicio', dadosFaxina?.hora_inicio, {shouldValidate: true});//shouldValidate serve para validar os campos do formulário
      serviceForm.setValue('faxina.data_atendimento', dadosFaxina?.data_atendimento, {shouldValidate: true});//shouldValidate serve para validar os campos do formulário
      serviceForm.setValue('faxina.hora_termino', DateService.addHours(dadosFaxina?.hora_inicio as string, totalTime), {shouldValidate: true});//shouldValidate serve para validar os campos do formulário
    } else {
      serviceForm.setValue('faxina.hora_termino', '') //aqui usamos o setValue para fazer a alteração no campo de faxina.hora_termino
    }
  }, [totalTime, dadosFaxina?.hora_inicio, dadosFaxina?.data_atendimento, dadosFaxina?.hora_termino])
//----------------------------------------------------------------


//----------------------------------------------------------------
// enviando o formulário de serviço e seguindo para próxima página

  function onServiceFormSubmit(data: NovaDiariaFormDataInterface) {
    if (userState.user.nome_completo){
      criarDiaria(userState.user)
    } else {
      //aqui vamos para o segundo formulário
      setStep(2);
    }
  };
//----------------------------------------------------------------


//----------------------------------------------------------------
// cadastro do usuário 
// vamos precisar dos links hateoas

  async function onClientFormSubmit(data: CadastroClienteFormDataInterface) {
    const newUserLink = linksResolver(externalServicesState.externalService, 'cadastrar_usuario');

    if(newUserLink) {
      try {
        await cadastrarUsuario(data, newUserLink);
      } catch (error) {
        UserService.handleNewUserError(error, clientForm);
      }
    }
  };

  async function cadastrarUsuario(data: CadastroClienteFormDataInterface, link: ApiLinksInterface) {
    //os dados estão vindo pelo data, como paramêtro
    const newUser = await UserService.cadastrar(data.usuario, UserType.Cliente, link);

    //verificação se deu certo os dados do user
    if (newUser) {
      const loginSuccess = await login({ email: data.usuario.email, password: data.usuario.password ?? ''}, newUser);

      if(loginSuccess) {
        criarDiaria(newUser);
      };
    };
  };
//----------------------------------------------------------------


//----------------------------------------------------------------
// Envio de formulário de diária, sem login
// Possui as validações de login e usuário

  async function onLoginFormSubmit(data: LoginFormDataInterface<CredenciaisInterface>) {
    //credinciais passadas
    const loginSuccess = await login(data.login);
    if (loginSuccess) {
      const user = await LoginService.getUser();
      if (user) {
        criarDiaria(user);
        setStep(3)
      };
    };
  };

  async function login(credentials: CredenciaisInterface, user?: UserInterface): Promise<boolean> {
    //necessário as credentials
    const loginSuccess = await LoginService.login(credentials);//retorna um boleano

    if(loginSuccess){

      //verificamos se tem algum user logado
      if(!user){
        user = await LoginService.getUser();
      };

      //useDispatch() usamos para alterar os dados do contexto, type é o tipo do campo que vou alterar, payload é o campo que vou enviar
      userDispatch({type: 'SET_USER', payload: user})

    } else {
      setLoginErro('E-mail e/ou senha inválidos!')
    };

    return loginSuccess;
  };
//----------------------------------------------------------------


//----------------------------------------------------------------
// precisamos acesar o gateway do pagar.me
// precisamos enviar a hash do pagamento e retornar uma key

  async function onPaymentFormSubmit(data: PagamentoFormDataInterface ) {
    const cartao = {
      card_number: data.pagamento.numero_cartao.replaceAll(' ', ''),
      card_holder_name: data.pagamento.nome_cartao,
      card_cvv: data.pagamento.codigo,
      card_expiration_date: data.pagamento.validade,
    } as CardInterface;

    //aqui ja estamos com hash e os dados do cartão
    const hash = await PaymentService.getHash(cartao);

    //essa lista de links vai vir da api
    ApiServiceHateoas(novaDiaria.links, 'pagar_diaria', async (request) => {
      try {
        await request({
          data: {
            card_hash: hash,
          },
        });
        setStep(4);
      } catch (error){
        paymentForm.setError('pagamento_recusado',  {type: 'manual', message: 'Pagamento recusado!'});
      };
    });
  };
//----------------------------------------------------------------


//----------------------------------------------------------------
// função para validação dos calculos de serviço

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
//----------------------------------------------------------------

//----------------------------------------------------------------
// função para calculo de preço dos serviços

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
//----------------------------------------------------------------

//----------------------------------------------------------------
// função para calculo do total de comodos selecionados

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
  };
//----------------------------------------------------------------

//----------------------------------------------------------------
// função asincrona para criar a diária 
// usamos a api do back end com o hateoas para listar os links

  async function criarDiaria(user: UserInterface) {
    //vamos verificar se temos usuario logado
    if (user.nome_completo) {
      //getValues nos traz os dados do formulário
      const { endereco, faxina } = serviceForm.getValues();
      //os links do hateoas vem nos dados do usuário
      await ApiServiceHateoas(
        user.links, 
        'cadastrar_diaria', 
        async (request) => {
        const { data: novaDiaria } = await request<DiariaInterface>({
          data: {
            ...faxina,
            ...endereco,
            cep: TextFormatService.getNumbersFromText(endereco.cep),
            preco: totalPrice,
            tempo_atendimento: totalTime,
            data_atendimento: TextFormatService.reverseDate(
              faxina.data_atendimento as string
            ) + 'T' + faxina.hora_inicio,
          },
        });

        if (novaDiaria) {
          setStep(3);
          //estou salvando os dados da nova diária
          setNovaDiaria(novaDiaria);
        }
      });
    }
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