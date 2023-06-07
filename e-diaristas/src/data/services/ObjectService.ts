export const ObjectService = {
  //vamos fazer a conversão do tipo json
  jsonToFormData(data: any):FormData {
    const formData = new FormData();

    //vamos varrer os dados e a cada loop vamos passar o valor para as key
    for(const key in data){
      formData.append(key, data[key]);
    }
    return formData;
  }
}