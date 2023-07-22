import { yupResolver } from "@hookform/resolvers/yup";
import { CadastroDiariaFormDataInterface } from "data/@types/FormInterface";
import { FormSchemaService } from "data/services/FormSchemaService";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function useCadastroDiarista(){
  const [step, setStep] = useState(1),
    breadcrumbsItems = ['Identificação', 'Cidades atendidas'],
    userForm = useForm<CadastroDiariaFormDataInterface>({
      resolver: yupResolver(
        FormSchemaService.userData()
          .concat(FormSchemaService.address())
          .concat(FormSchemaService.newContact())
      ),
    }),
    addressListForm = useForm<CadastroDiariaFormDataInterface>();
  
  return { step, setStep, breadcrumbsItems, userForm, addressListForm };
}