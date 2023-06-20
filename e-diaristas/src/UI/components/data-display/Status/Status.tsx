import React, {PropsWithChildren} from 'react';
import { StatusStyled } from './Status.styled';
import { TextColor } from 'data/@types/DiariaInterface';
// import {} from '@mui/material';

export interface StatusProps {
  colors?: TextColor;
}

const Status:React.FC<PropsWithChildren<StatusProps>> = ({ colors = 'success', ...props }) => {
  return <StatusStyled sx={{bgcolor: `${colors}.main`}} {...props}/>
}

export default Status