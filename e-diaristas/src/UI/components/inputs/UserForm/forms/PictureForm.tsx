import { useFormContext, Controller } from "react-hook-form";
import FileField from "../../FileField/FileField"
import { PictureSelect } from "../UserForm.styled"


export const PictureForm = () => {
  const { control } = useFormContext();

  return (
    <PictureSelect>
      <Controller 
        name={'usuario_foto_documento'}
        defaultValue={''}
        control={control}
        render={({ field }) => {

          return (
            <FileField 
              onChange={( files ) => { field.onChange(files[0])}}//estamos recebendo o arquivo na primeira posição
              inputProps={{ accept: '.jpeg, .jpg, .png' }}
            />
          )
        }}
      />
    </PictureSelect>
  )
}