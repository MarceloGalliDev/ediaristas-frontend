import { styled } from "@mui/material/styles";

export const GradientBackground = styled("section")`
  padding-bottom: ${({ theme }) => theme.spacing(20)};
  background: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`};
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const SectionTitle = styled("h2")`
  
`;