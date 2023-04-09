import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import LinkV2, { LinkProps } from "UI/components/navigation/Links/LinksV2";
import { PropsWithChildren } from "react";


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
    grid-template-areas: 
      "title picture" 
      "subtitle picture" 
      "button picture";
    gap: ${({ theme }) => theme.spacing(4)};
    align-items: center;
    align-content: center;
    justify-content: space-between;
    justify-items: center;
    min-height: 450px;
  };

  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 350px;
  };

  .buttonSection{
    grid-area: button;
    width: 405px;
    height: 100%;
  };
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
    background-color: ${({ theme }) => theme.palette.secondary.main};
    border-radius: 50px;
    padding: ${({ theme }) => theme.spacing(2)};
    transform: translate(20%, -20%);
  }

  em {
    font-style: inherit;
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

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    font-weight: normal;
    .twf-search {
      display: none;
    }
  }
`;

export const SectionSubtitle = styled('p')`
  grid-area: subtitle;

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: ${({ theme }) => theme.spacing(0, 0, 5)}
  };
  
  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 350px;
  };
`;

export const SectionPictureContainer = styled("div")`
  grid-area: picture;

  img {
    width: 95%;
    position: relative;
    top: 25px;
    right: 60px;
    z-index: 2;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 100%;
  }

  &::before {
    background-color: ${({ theme }) => theme.palette.primary.main};
    width: 130px;
    height: 130px;
    top: 20%;
    right: 10%;
    z-index: 2;
  }

  &::after {
    background-color: ${({ theme }) => theme.palette.grey[200]};
    width: 40px;
    height: 40px;
    bottom: 32%;
    right: 13%;
    z-index: 1;
  }
`;

export const SectionButton = styled((props: PropsWithChildren<LinkProps>) => (
  <LinkV2 {...props}/>
))``;