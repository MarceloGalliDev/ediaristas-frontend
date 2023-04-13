import { styled } from "@mui/material";

export const Wave = styled("img")`
  width: 100%;
  height: 100px;
  margin-top: -100px;
`;

export const Wave2 = styled("img")`
  width: 100%;
  height: 100px;
  margin-top: -100px;
`;

export const SectionTitle = styled("h2")`
  margin: 0;
  text-align: center;
`;

export const SectionSubtitle = styled("p")`
  position: relative;
  text-align: center;
  margin: ${({ theme }) => theme.spacing(2, 0, 10)};

  &::after{
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.palette.grey['300']};
    width: 96px;
    height: 3px;
    left: 50%;
    bottom: ${({ theme }) => theme.spacing(-5)};
    transform: translateX(-50%)
  }
`;

export const SectionContainer = styled("section")`
  padding-bottom: ${({ theme }) => theme.spacing(7)}
`;

