import { Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
//import { } from '@mui/material/';
//import { ChipFieldProps } from './ChipField'

export const ChipsContainer = styled('ul')`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)};
  margin: 0;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  border: 1px solid ${({ theme }) => theme.palette.grey[100]};
  list-style-type: none;
  box-sizing: border-box;
  color: ${({ theme }) => theme.palette.text.secondary};
  min-height: ${({ theme }) => theme.spacing(8)};
  `;

export const ChipsStyled = styled(Chip)`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  
  &.MuiChip-root {
    height: auto;
    padding: ${({ theme }) => theme.spacing(1, 2)};
    border: 1px solid ${({ theme }) => theme.palette.grey[100]};
    border-radius: ${({ theme }) => theme.shape.borderRadius};
    color: ${({ theme }) => theme.palette.text.secondary};
    background-color: white;
  }

  .MuiChip-label {
    padding: 0;
    white-space: pre-wrap;
  }

  .MuiChip-deleteIcon {
    font-size: ${({ theme }) => theme.spacing(2)};
    margin-left: ${({ theme }) => theme.spacing(3)};
  }
`;