export const DateService = {
  addHours(startTime: string, hours: number): string {
    let[ hour, minute ] = startTime.split(':').map(Number)//o split ja retorna uma lista, e o map vai retornar uma lista de outra lista

    hour = Math.min(hour + hours, 23);

    const newHour = hour.toString().padStart(2, '0'),//padStart, depois que ele passa os dois caracteres, se tiver somente um caracter ele adiciona um 0 antes do ultimo caracter
      newMinute = minute.toString().padStart(2, '0');
    
    return `${newHour}:${newMinute}`;
  },
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

  getTimeFromDate(date: string): string {
    //2022:00:00T00:00:00
    const [_, time] = date.split('T'),
      [hours, minutes, ..._rest] = time.split(':')
    return `${hours}:${minutes}`
  }
};

