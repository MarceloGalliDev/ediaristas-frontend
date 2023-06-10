import { CredenciaisInterface } from "data/@types/FormInterface";
import { ApiService } from "./ApiService";
import { LocalStorage } from "./StorageService";
import { UserInterface } from "data/@types/UserInterface";


export const LoginService = {
  //necessário as credenciais para login
  async login(credentials: CredenciaisInterface): Promise<boolean>{

    try {
      const { data } = await ApiService.post<{ access: string, refresh: string }>('/auth/token/', credentials);
  
      //vamos salvar o token no storage para otimizar as consultas e authentication
      LocalStorage.set('token', data.access);
      LocalStorage.set('token_refresh', data.refresh);
  
      //vamos configurar o cabeçalho no post
      ApiService.defaults.headers.common.Authorization = `Bearer ${data.access}`;
      return true;
    } catch (error){
      return false;
    }
  },
  async logout(): Promise<void>{
    await ApiService.post('/auth/logout/', { refresh: LocalStorage.get('token_refresh', '')});

    LocalStorage.clear('token');
    LocalStorage.clear('refresh_token');
  },
  async getUser(): Promise<UserInterface | undefined>{
    const token = LocalStorage.get('token', '');

    if(token){
      ApiService.defaults.headers.common.Authorization = `Bearer ${token}`;
      return (await ApiService.get<UserInterface>('/api/me')).data;//fazemos isso para nao ter necessidade de colocar const, aqui ele vai esperar o resultado e retornar o response.data
    }

    return undefined;
  },//Promise<(retorno da promise)>

}