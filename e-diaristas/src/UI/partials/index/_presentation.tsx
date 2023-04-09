import { useEffect, useState } from "react";
import {
  ContainerStyled,
  SectionContainer,
  SectionSubtitle,
  SectionTitle,
  SectionButton,
  SectionPictureContainer,
  BottomButton
} from "./_presentation.styled";
import RoundedButton from "UI/components/inputs/RoundedButton/RoundedButton";

const Presentation = () => {
  const [cleanerPicture, setCleanerPicture] = useState('');

  useEffect(() => {
    const newCleanerPicture = Math.random() < 0.5 
      ? "/img/home/housekeeper.png" 
      : "/img/home/janitor.png";
      setCleanerPicture(newCleanerPicture);
  }, [])

  return (
    <SectionContainer>
      <ContainerStyled>
        <SectionTitle>
          Encontre agora mesmo um(a) <em>diarista</em>
          <i className="twf-search" />
        </SectionTitle>

        <SectionSubtitle>
          São mais de 5.000 profissionais esperando por você.
        </SectionSubtitle>

        <RoundedButton className="buttonSection" variant="contained">
          <SectionButton href={"/encontrar-diarista"}>
            ENCONTRE UM(A) DIARISTA
          </SectionButton>
        </RoundedButton>

        <SectionPictureContainer>
          <img src={cleanerPicture} alt="diarista" />
        </SectionPictureContainer>

      </ContainerStyled>
      <BottomButton>
        <i className="twf-caret-down"/>
      </BottomButton>
    </SectionContainer>
  ); 
};

export default Presentation;