//Arquivo para manusear formatação de texto

import { EnderecoInterface } from "data/@types/EnderecoInterface";

const CurrencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export const TextFormatService = {
  reverseDate(data: string): string {
    if(data.includes('/')){
      return data.split('/').reverse().join('-');
      //['2020','20','01'] esse é o retorno aqui e o reverse inverte os campos e o join é a junção dos campos com -
    };

    if(data.includes('T')){
      [data] = data.split('T')
    };

    return data.split('-').reverse().join('/')
  },
  currency(price = 0): string {
    if(isNaN(price)){
      price = 0
    }
    return CurrencyFormatter.format(price);
  },
  getNumbersFromText(text = ''):string {
    return text.replace(/\D/g, '');
  },
  dateToString(date: Date, withTime = false):string {
    const time = date.toISOString();//2022/04/01T01:01:01:Z

    if(withTime){
      return time.substring(0,19);
    };
    return time.substring(0, 10)//substring é para pegar somente uma parte da string, do 0 a 10 caracteres
  },
  getAddress(endereco: EnderecoInterface): string {
    let enderecoFormatado = ''

    //vamos atualizar esse endereço, para incluir no componente
    enderecoFormatado += endereco.logradouro ? `${endereco.logradouro}, ` : '';
    enderecoFormatado += endereco.numero ? `${endereco.numero} - ` : '';
    enderecoFormatado += endereco.bairro ? `${endereco.bairro}, ` : '';
    enderecoFormatado += endereco.cidade ? `${endereco.cidade} - ` : '';
    enderecoFormatado += endereco.estado ? `${endereco.estado}` : '';

    return enderecoFormatado;
  },
  formatPhoneNumber(phoneNumber: string): string {
    //o match ele verifica um expressão regular
    //os parenteses dentro da expressão regular corresponde a um grupo
    //para pegar apartir do inicio usamos o ^, e ´\d é pegando o primeiro numero, {} é a quantidade de números
    //vai nos retornar uma lista
    const match = phoneNumber.match(/^(\d{2})(\d{5})(\d{4})/)

    if(match){
      const [__, ddd, n1, n2] = match;
      return `(${ddd}) ${n1}-${n2}`;
    }
    return phoneNumber;
  }
};
//aqui recebemos uma data com tipagem de string que retorna uma string
//função include() é para verificar se tem o caracter