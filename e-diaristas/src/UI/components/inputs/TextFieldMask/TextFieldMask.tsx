import React, {PropsWithChildren} from 'react';
import InputMask from 'react-input-mask';
import TextField from '../TextField/TextField';
import { OutlinedTextFieldProps } from '@mui/material';
// import {} from './TextFieldMask.styled';

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: string,
}

const TextFieldMask:React.FC<PropsWithChildren<TextFieldMaskProps>> = ({
  mask,
  value,
  onChange,
  onBlur, 
}) => {
  return (
    <InputMask mask={mask}>{() => <TextField />}</InputMask>
  )  
}

export default TextFieldMask