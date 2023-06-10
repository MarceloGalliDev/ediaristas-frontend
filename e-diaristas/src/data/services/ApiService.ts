//todas as requisições partem daqui

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiLinksInterface } from 'data/@types/ApiLinksInterface';
import { LocalStorage } from './StorageService';

const baseUrl = process.env.NEXT_PUBLIC_API;

export const ApiService = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

//interceptando a requisição
ApiService.interceptors.response.use(
  (response) => response, 
  (error) => {
    if(
      error.response.status === 401 && 
      error.response.data.code === 'token_not_valid'
      ){ //no error estamos validando o nome do código
        handleTokenRefresh(error)
      }
      return Promise.reject(error);
  }
);

async function handleTokenRefresh(error: { config: AxiosRequestConfig }) {
  const tokenRefresh = LocalStorage.get('token_refresh', '');
  //validar se temos o refresh_token
  if(tokenRefresh){
    //limpando o token anterior
    LocalStorage.clear('token_refresh');
    LocalStorage.clear('token');

    try {
      const {data} = await ApiService.post<{access: string, refresh: string}>('/auth/token/refresh/', {refresh: tokenRefresh});
      LocalStorage.set('token_refresh', data.refresh);
      LocalStorage.set('token', data.access);

      //configurando cabeçalho
      ApiService.defaults.headers.common.Authorization = `Bearer ${data.access}`;
      //é a mesma forma que acima, so que em javascript é assim que faz
      error.config.headers!['Authorization'] = `Bearer ${data.access}`;

      return ApiService(error.config);
    } catch (error) {
      return error;
    }
  }
}

export function linksResolver(
  links: ApiLinksInterface[] = [], 
  nomeLink: string
  ){
    return links.find((link) => link.rel === nomeLink )
    //vamos verificar se algo é verdadeiro ou falso e retornar o mesmo elemento
    //ele compara se o nome do nomeLink é o mesmo nome que vem la da API
};

export function ApiServiceHateoas(
  links: ApiLinksInterface[] = [], 
  nome: string,
  //função para fazer a requisição de fato
  onCanRequest: (
    request: <T>(data?: AxiosRequestConfig) => Promise<AxiosResponse<T>>) => void,

  //se acaso nao conseguirmos acessar um link
  onCantRequest?: Function //() => {} é a mesma coisa
) {
  const link = linksResolver(links, nome);

  if (link) {
    onCanRequest(async (data) => {
      return await ApiService.request({
        url: link.uri,
        method: link.type,
        ...data, //axios request.config, são os dados da requisição
      })
    })
  } else {
    onCantRequest?.();
  }
}