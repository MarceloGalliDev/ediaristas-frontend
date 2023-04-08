import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

export const SectionContainer = styled('section')`
  min-height: 250px;
  background-image: url('/img/home/living-room.svg');
  background-repeat: no-repeat;
  background-position: right center;
  background-size: cover;

  ${({ theme }) => theme.breakpoints.down("md")}{
    display: flex;
    text-align: center;
  }

  ${({ theme }) => theme.breakpoints.up("md")}{
    background-position: center;
  }
`;

export const ContainerStyled = styled(Container)`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-areas: "title" "subtitle" "button";
  align-content: center;

  //acima de medium device
  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: 450px minmax(200px, 450px); //se ajusta ao tamanho da página
    grid-template-rows: 125px 55px 60px;
    grid-column: "title picture" "subtitle picture" "button picture";
    gap: ${({ theme }) => theme.spacing(4)};
    align-items: center;
    align-content: center;
    justify-content: space-between;
    justify-items: center;
    min-height: 450px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 350px;
  }
`;

export const SectionTitle = styled("h1")`
  grid-area: title;
  margin: 0;
  color: #000;
  position: relative;

  .twf-search {
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${({ theme }) => theme.palette.grey[200]};
    border-radius: 50px;
    padding: ${({ theme }) => theme.spacing(2)};
    transform: translate(20%, -20%);
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    border: 4px solid ${({ theme }) => theme.palette.grey[200]};
    border-radius: 65px;
    padding: ${({ theme }) => theme.spacing(4, 8)};
    line-height: 30px;

    em {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;