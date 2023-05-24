import { NovaDiariaFormDataInterface } from "data/@types/formInterface";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { FormSchemaService } from "data/services/FormSchemaService";


export default function useContratacao() {
  const [ step, setStep ] = useState(1),
  breadcrumbItems = ['Detalhes da diária', 'Identificação', 'Pagamento']

  const serviceForm = useForm<NovaDiariaFormDataInterface>({
    resolver: yupResolver(
      FormSchemaService.address().concat(FormSchemaService.detalheServico())
    )
  });
  
  function onServiceFormSubmit(data: NovaDiariaFormDataInterface) {
    console.log(data)
  }

  return { step, breadcrumbItems, serviceForm, onServiceFormSubmit };
}