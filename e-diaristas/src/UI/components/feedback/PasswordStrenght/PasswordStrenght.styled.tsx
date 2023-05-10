import { LinearProgress, Theme } from '@mui/material';
import { styled } from '@mui/material/styles';
//import { } from '@mui/material/';
//import { PasswordStrenghtProps } from './PasswordStrenght'

export const PasswordStrengthLabel = styled('span', {
  shouldForwardProp: (prop) => prop !== "value",
})<{ value: number }>`
  color: ${({ theme, value }) => handleBarColor(theme, value)};
  font-weight: bold;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export const PasswordStrengthBar = styled(LinearProgress)`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  margin-top: ${({ theme }) => theme.spacing(0.8)};

  &.MuiLinearProgress-root {
    background-color: ${({ theme }) => theme.palette.grey[200]};
  };

  .MuiLinearProgress-bar {
    background-color: ${({ theme, value }) => handleBarColor(theme, value)};//esse value esta vindo do componente, pela propriedade.
  }
`;

function handleBarColor(theme: Theme, value = 0) {
  if (value <= 25) {
    return theme.palette.error.main;
  };

  if (value > 25 && value <= 50) {
    return theme.palette.warning.main;
  };

  return theme.palette.success.main;
};