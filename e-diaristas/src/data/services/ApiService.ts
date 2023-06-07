import axios from 'axios';
import { ApiLinksInterface } from 'data/@types/ApiLinksInterface';

const baseUrl = process.env.NEXT_PUBLIC_API;

export const ApiService = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function linksResolver(
  links: ApiLinksInterface[] = [], 
  nomeLink: string
  ){
    return links.find((link) => link.rel === nomeLink )
    //vamos verificar se algo é verdadeiro ou falso e retornar o mesmo elemento
    //ele compara se o nome do nomeLink é o mesmo nome que vem la da API
};