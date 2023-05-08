import { Select } from '@mui/material';
import { styled } from '@mui/material/styles';
//import { SelectProps } from './Select'

export const SelectStyled = styled(Select)`
  font-family: ${({ theme }) => theme.typography.fontFamily}
`;