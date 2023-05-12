export const DateService = {
  transformDate(value: any, originalValue: any): any {
    //validar se ja é data válida
    if(typeof originalValue === 'string'){
      const [dia, mes, ano] = originalValue.split('/');// aqui estamos desestruturando a data que esta '99/99/9999' em '99','99','9999' e coloca na posição do array dia, mes, ano
      if(+mes < 1 || +mes > 12){
        return new Date('');
      } //o +mes é a conversão de string em number no JS
      return new Date(+ano, +mes - 1, + dia);//mês tem que começar no 0
    }
    return value;
  },

  maxAdultBirthday(): Date{
    const dataMax = new Date();
    dataMax.setFullYear(dataMax.getFullYear() - 100)
    return dataMax;
  },

  minAdultBirthday(): Date{
    const dataMin = new Date();
    dataMin.setFullYear(dataMin.getFullYear() - 18)
    return dataMin;
  },
};

