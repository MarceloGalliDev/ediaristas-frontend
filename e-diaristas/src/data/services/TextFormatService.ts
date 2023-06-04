//Arquivo para manusear formatação de texto


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
};
//aqui recebemos uma data com tipagem de string que retorna uma string
//função include() é para verificar se tem o caracter