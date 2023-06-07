import { ApiLinksInterface } from "data/@types/ApiLinksInterface";
import { UserInterface, UserType } from "data/@types/UserInterface";
import { ApiService } from "./ApiService";
import { TextFormatService } from "./TextFormatService";
import { ObjectService } from "./ObjectService";

export const UserService = {
  async cadastrar(
    user: UserInterface,
    userType: UserType,
    link: ApiLinksInterface,
  ): Promise<UserInterface | undefined> {
    //aqui limpamos o cabeçalho
    ApiService.defaults.headers.common.Authorization = '';

    const telefone = TextFormatService.getNumbersFromText(user.telefone);
    const cpf = TextFormatService.getNumbersFromText(user.cpf);
    const nascimento = TextFormatService.dateToString(user.nascimento as Date);

    const userData = ObjectService.jsonToFormData({
      ...user,
      tipo_usuario: userType,
      cpf,
      telefone,
      nascimento,
    });//estamos enviado para api os dados do usuário

    const response = await ApiService.request<UserInterface>({
      url: link.uri,
      method: link.type,
      data: userData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  }
};