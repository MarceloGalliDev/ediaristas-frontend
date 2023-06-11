import { AxiosError, AxiosRequestConfig } from 'axios';
import { ApiLinksInterface } from 'data/@types/ApiLinksInterface';
import { ApiService, ApiServiceHateoas } from 'data/services/ApiService';
import { useEffect, useCallback } from 'react';
import useSwr, { mutate } from 'swr';

export default function useApiHateoas<OutputType, Err = unknown>(
  links: ApiLinksInterface[] = [], 
  nome: string | null,
  config?: AxiosRequestConfig
): { data: OutputType | undefined, error: AxiosError<Err> | undefined }{
  const makeRequest = useCallback(() => {
    //vamos utilizar um new Promise para podermos executar a função de ApiServiceHateoas()
    //precisamos acessar os dados dessa resposta que esta dentro do escopo da função
    return new Promise<OutputType>((resolve) => {
      ApiServiceHateoas(links, nome ?? '', async (request) => {
        //estamos recebendo as config pelo paramêtro do hateoas
        const response = await request<OutputType>(config);
        resolve(response.data);
      });
    });
  }, [links, nome, config])

  //useSwr precisamos passar o identificador único
  const { data, error } = useSwr<OutputType, AxiosError<Err>>(
    nome,
    makeRequest
  );
  
  useEffect(() => {
    //preciso forçar a reexecução quando o link ou nome for alterado
    mutate(nome, makeRequest)
  }, [links, nome, makeRequest]);
  
  return { data, error };
};

//os links quando vir para nosso front através desse hook, ele vem vázio
//useCallback ele faz cache para uma função

/*
  Para usar o GenericsType, temos o exemplo:
  useApi<{nome:string}>().data
  logo o .data esta recebendo a tipagem como um objeto que recebe nome como string
*/

/*
//vamos receber nosso end-point pelos paramêtros
export default function useApi<OutputType>(
  endPoint: string | null, 
  config?: AxiosRequestConfig
  ): { data: OutputType | undefined, error: Error } {
  const { data, error } = useSwr(endPoint, async (url) => {
    const response = await ApiService(url, config);

    return response.data;
  });
  return { data, error };
};
*/