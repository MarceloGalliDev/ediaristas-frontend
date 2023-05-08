import React, {PropsWithChildren} from 'react';
import { FormControl, InputLabel, SelectProps as MuiSelectProps } from '@mui/material';
import { SelectStyled } from './Select.styled';
// import {} from './Select.styled';

export interface SelectProps extends MuiSelectProps {
  label?: string;
}

const Select:React.FC<PropsWithChildren<SelectProps>> = ({ 
  label,
  children,
  style, 
  ...props
}) => {
  return (
    <FormControl variant='outlined' style={style}>
      <InputLabel id={"meuLabel"}>{ label }</InputLabel>
      <SelectStyled labelId='' label={label} {...props}>{children}</SelectStyled>
    </FormControl>
  )  
}

export default Select