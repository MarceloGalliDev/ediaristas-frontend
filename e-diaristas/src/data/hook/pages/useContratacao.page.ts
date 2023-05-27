import { NovaDiariaFormDataInterface } from "data/@types/formInterface";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { FormSchemaService } from "data/services/FormSchemaService";
import { ServicoInterface } from "data/@types/ServicoInterface";


export default function useContratacao() {
  const [ step, setStep ] = useState(1),
  breadcrumbItems = ['Detalhes da diária', 'Identificação', 'Pagamento']

  const serviceForm = useForm<NovaDiariaFormDataInterface>({
    resolver: yupResolver(
      FormSchemaService.address().concat(FormSchemaService.detalheServico())
    )
  }),

  servicos: ServicoInterface[] = [

  ];
  
  function onServiceFormSubmit(data: NovaDiariaFormDataInterface) {
    console.log(data)
  }

  return { step, breadcrumbItems, serviceForm, onServiceFormSubmit, servicos };
}