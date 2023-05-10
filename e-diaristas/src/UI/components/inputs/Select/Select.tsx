import React, {PropsWithChildren, useEffect, useState} from 'react';
import { FormControl, InputLabel, SelectProps as MuiSelectProps } from '@mui/material';
import { SelectStyled } from './Select.styled';
import { v4 as uuid} from 'uuid'; 
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
  const [elementId, setElementeId] = useState('');

  useEffect(() => {
    if(window !== undefined) {
    setElementeId(uuid())
    }
  }, []);

  return (
    <FormControl variant='outlined' style={style}>
      <InputLabel id={elementId}>{ label }</InputLabel>
      <SelectStyled labelId={elementId} label={label} {...props}>{children}</SelectStyled>
    </FormControl>
  )  
}

export default Select