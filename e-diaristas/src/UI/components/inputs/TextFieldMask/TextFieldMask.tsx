import React, {PropsWithChildren} from 'react';
import InputMask from 'react-input-mask';
import TextField from '../TextField/TextField';
// import {} from '@mui/material';
// import {} from './TextFieldMask.styled';

export interface TextFieldMaskProps {}

const TextFieldMask:React.FC<PropsWithChildren<TextFieldMaskProps>> = () => {
  return (
    <InputMask mask={'99/99/9999'}>{() => <TextField />}</InputMask>
  )  
}

export default TextFieldMask