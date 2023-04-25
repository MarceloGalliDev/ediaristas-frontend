import { styled } from '@mui/material/styles'

export const PageTitleContainer = styled('div')`
  margin: ${({ theme }) => theme.spacing(5, 0)};
  text-align: center;
`;

export const PageTitleStyled = styled('h2')`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: 600;
  margin: 0;
  color: ${({ theme }) => theme.palette.primary.main};

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
  }
`;

export const PageSubtitleStyled = styled("h3")`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  margin: ${({ theme }) => theme.spacing(1.5, 0)};
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: normal;
  font-size: ${({ theme }) => theme.typography.body1.fontSize};

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;