import { styled } from "@mui/material/styles";

export const GradientBackground = styled("section")`
  padding-bottom: ${({ theme }) => theme.spacing(20)};
  background: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`};
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const SectionTitle = styled("h2")`
  position: relative;
  font-weight: normal;
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  margin: 0;
  padding: ${({ theme }) => theme.spacing(10, 0, 4)};
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    width: 44px;
    height: 2px;
    background-color: currentColor;
    left: 50%;
    bottom: ${({ theme }) => theme.spacing(2)};
    transform: translateX(-50%);
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: ${({ theme }) => theme.typography.h5.fontSize};
  }
`;