import { FormValues } from 'data/@types/forms/FormValue';
import { UserData } from '../UserForm.styled';
import { Controller, useFormContext } from 'react-hook-form';
import TextFieldMask from '../../TextFieldMask/TextFieldMask';
import TextField from '../../TextField/TextField';

interface UserDataFormProps {
  cadastro?: boolean;

}

export const UserDataForm:React.FC<UserDataFormProps> = ({ cadastro = false }) => {
  const { 
    register, 
    formState: { errors },
    control,
  } =useFormContext<FormValues>();

  return (
    <UserData>

      <TextField
        label={'Nome Completo'}
        defaultValue={''}
        style={{ gridArea: 'nome'}}
        {...register('usuario.nome_completo')}
        error={errors.usuario?.nome_completo != undefined}
        helperText={errors.usuario?.nome_completo?.message}
        />

      <Controller 
        name={'usuario.nascimento'}
        defaultValue={''}
        control={control}
        render={({field: {
          ref, ...inputProps
        }}) => {
          return (
            <TextFieldMask 
              mask='99/99/9999'  
              {...inputProps}
              label={'Data de Nascimento'}
              style={{gridArea: 'data-nascimento'}}
              error={errors.usuario?.nascimento != undefined}
              helperText={errors.usuario?.nascimento?.message}
            />
          )
        }}
      />

      <Controller 
        name={'usuario.cpf'}
        defaultValue={''}
        control={control}
        render={({field: {
          ref, ...inputProps
        }}) => {
          return (
            <TextFieldMask 
              mask='99.999.999-99'  
              {...inputProps}
              label={'CPF'}
              style={{gridArea: 'cpf'}}
              error={errors.usuario?.cpf != undefined}
              helperText={errors.usuario?.cpf?.message}
              InputProps={{ readOnly: !cadastro }}//Input com I maiúsculo para acessar elementos das props
            />
          )
        }}
      />

      <Controller 
        name={'usuario.telefone'}
        defaultValue={''}
        control={control}
        render={({field: {
          ref, ...inputProps
        }}) => {
          return (
            <TextFieldMask 
              mask='(99) 99999-9999'  
              {...inputProps}
              label={'telefone'}
              style={{gridArea: 'telefone'}}
              error={errors.usuario?.telefone != undefined}
              helperText={errors.usuario?.telefone?.message}
            />
          )
        }}
      />

    </UserData>
  )
}