import { styled } from '@mui/material/styles'

export const PageTitleContainer = styled('div')`
  margin: ${({ theme }) => theme.spacing(5, 0)};
  text-align: center;
`;

export const PageTitleStyled = styled('h2')`
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export const PageSubtitleStyled = styled("h3")`
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;