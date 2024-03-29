import { yupResolver } from "@hookform/resolvers/yup";
import { EnderecoInterface } from "data/@types/EnderecoInterface";
import { CadastroDiaristaFormDataInterface } from "data/@types/FormInterface";
import { UserInterface, UserType } from "data/@types/UserInterface";
import { ExternalServiceContext } from "data/contexts/ExternalServiceContext";
import { ApiService, ApiServiceHateoas, linksResolver } from "data/services/ApiService";
import { FormSchemaService } from "data/services/FormSchemaService";
import { LocalStorage } from "data/services/StorageService";
import { TextFormatService } from "data/services/TextFormatService";
import { UserService } from "data/services/UserService";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

export default function useCadastroDiarista(){
  const [step, setStep] = useState(1),
    breadcrumbsItems = ['Identificação', 'Cidades atendidas'],
    userForm = useForm<CadastroDiaristaFormDataInterface>({
      resolver: yupResolver(
        FormSchemaService.userData()
          .concat(FormSchemaService.address())
          .concat(FormSchemaService.newContact())
      ),
    }),
    addressListForm = useForm<CadastroDiaristaFormDataInterface>(),
    { externalServicesState } = useContext(ExternalServiceContext),
    [load, setLoad] = useState(false),
    [newAddress, setNewAddress] = useState<EnderecoInterface>(),
    [newUser, setNewUser] = useState<UserInterface>(),
    //vamos observar o campo, verificando se há alterações
    enderecoAtendidos = addressListForm.watch('enderecoAtendidos'),
    //para abrir o modal
    [sucessoCadastro, setSucessoCadastro] = useState(false)

    async function onUserSubmit(data: CadastroDiaristaFormDataInterface){
      const newUserLink = linksResolver(externalServicesState.externalService, 'cadastro_usuario');

      if(newUserLink){
        try {
          setLoad(true)
          //aqui estamos usando o hook de cadastro, passando os dados do cadastro, o tipo do usuario cadastrado, se é diarista ou cliente, e o link que vamos retornar
          const newUser = await UserService.cadastrar(data.usuario, UserType.Diarista, newUserLink)
          if(newUser){
            setNewUser(newUser);
            await cadastrarEndereco(data, newUser);
          }
        } catch (error) {
          //aqui tratamos o erro com essa função que envia o erro, e também referenciamos o formulario
          UserService.handleNewUserError(error, userForm)
        } finally {
          setLoad(false);
        }
      }
    };

    async function cadastrarEndereco(data: CadastroDiaristaFormDataInterface, newUser: UserInterface){
      //aqui vamos receber o token do usuario, access token do usuario
      ApiService.defaults.headers.common.Authorization = "Bearer " + newUser?.token?.access;

      //vamos atualizar os token no local storage
      LocalStorage.set('token', newUser.token?.access);
      LocalStorage.set('token_refresh', newUser.token?.refresh);

      //vamos fazer o cadastro do endereço, vamos enviar os links que vem na conta do usuario, vou pegar o link cadastrar_endereco que ja trata o endereço do cliente e nos retorna, e depois a requisição
      ApiServiceHateoas(newUser.links, 'cadastrar_endereco', async (request) => {
        const { data: newAddress} = await request<EnderecoInterface>({
          data: {
            ...data.endereco,
            //cep vem formatado, vamos retirar a formatação
            cep: TextFormatService.getNumbersFromText(data.endereco?.cep)
          }
        });

        if(newAddress){
          setNewAddress(newAddress);
          setStep(2);
        };
      })
    }

    async function onAddressSubmit(data: CadastroDiaristaFormDataInterface) {
      if (newUser) {
        ApiServiceHateoas(
          newUser.links,
          'relacionar_cidades',
          async (request) => {
            try {
              setLoad(true);
              await request({
                data: {
                  cidades: data.enderecoAtendidos,
                },
              });
              setSucessoCadastro(true);
            } catch (error) {
            } finally {
              setLoad(false);
            }
          }
        );
      }
    }
  
  return {
    step,
    setStep,
    breadcrumbsItems,
    userForm,
    addressListForm,
    onUserSubmit,
    load,
    onAddressSubmit,
    enderecoAtendidos,
    newAddress,
    sucessoCadastro,
  };
}