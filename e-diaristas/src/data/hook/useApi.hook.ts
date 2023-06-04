import { AxiosRequestConfig } from 'axios';
import { ApiService } from 'data/services/ApiService';
import useSwr from 'swr';

//vamos receber nosso end-point pelos paramêtros
export default function useApi<T>(endPoint: string | null, config?: AxiosRequestConfig): { data: T | undefined, error: Error }{
  const { data, error } = useSwr(endPoint, async (url) => {
    const response = await ApiService(url, config);

    return response.data;
  })
  return { data, error };
};

/*
  Para usar o GenericsType, temos o exemplo:
  useApi<{nome:string}>().data
  logo o .data esta recebendo a tipagem como um objeto que recebe nome como string
*/