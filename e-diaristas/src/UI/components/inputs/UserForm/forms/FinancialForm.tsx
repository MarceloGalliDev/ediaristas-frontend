import { useFormContext } from "react-hook-form"
import TextField from "../../TextField/TextField"
import { FormValues } from "data/@types/forms/FormValue"
import { FinancialData } from "../UserForm.styled"


const FinancialForm = () => {
  const {register} = useFormContext<FormValues>()
  
  return (
    <FinancialData>
      <TextField
        label={'Chave Pix'}
        defaultValue={''}
        {...register('usuario.chave_pix', { minLength: 5 })}
      />
    </FinancialData>
  );
}

export default FinancialForm;