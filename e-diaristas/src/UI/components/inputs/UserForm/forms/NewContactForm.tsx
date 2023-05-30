import { useFormContext } from "react-hook-form";
import TextField from "../../TextField/TextField";
import { NewContactData } from "../UserForm.styled";
import { FormValues } from "data/@types/forms/FormValue";
import PasswordStrenght from "UI/components/feedback/PasswordStrenght/PasswordStrenght";

const NewContactForm = () => {
  const { register, formState: {errors}, watch } = useFormContext<FormValues>();

  const newPassword = watch('usuario.password');//observando a mudança e colocando o password na propriedade de PasswordStrenght
  
  return (
    <NewContactData>
      <TextField
        type={'email'}
        label={'E-Mail'}
        style={{ gridArea: 'email' }}
        {...register('usuario.email')}
        error={errors?.usuario?.email != undefined}
        helperText={errors?.usuario?.email?.message}
      />

      <TextField
        type={'password'}
        label={'Senha'}
        style={{ gridArea: 'senha' }}
        {...register('usuario.password')}
        error={errors?.usuario?.password != undefined}
        helperText={errors?.usuario?.password?.message}
      />

      <TextField
        type={'password'}
        label={'Confirmação da senha'}
        style={{ gridArea: 'confirmar-senha' }}
        {...register('usuario.password_confirmation')}
        error={errors?.usuario?.password_confirmation != undefined}
        helperText={errors?.usuario?.password_confirmation?.message}
      />
      <PasswordStrenght password={newPassword} />
    </NewContactData>
  );
};

export default NewContactForm;