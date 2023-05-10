import { styled } from '@mui/material/styles';
//import { } from '@mui/material/';
//import { FileFieldProps } from './FileField'

export const UploadIcon = styled('i')`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const FileContainer = styled('div')`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  position: relative;

  .MuiTextField-root:last-of-type {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  };
`;
