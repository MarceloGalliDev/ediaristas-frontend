import { AccordionDetails, AccordionSummary, Container, Typography } from "@mui/material";
import {
  Wave,
  SectionContainer,
  Wave2,
  SectionTitle,
  SectionSubtitle,
  AccordionStyled,
} from "./_frequent-question.style";


const FrequentQuestion = () => {
  return (
    <SectionContainer>
      <Wave2  src={"/img/home/waves.svg"} />
      <Container>
        <SectionTitle>Ainda está com dúvida?</SectionTitle>
        <SectionSubtitle>Veja abaixo as perguntas frequentes</SectionSubtitle>
        <AccordionStyled>

          <AccordionSummary expandIcon={<i className="twf-minus" />}>
            <Typography>
              asdasd
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              asdasd
            </Typography>
          </AccordionDetails>

        </AccordionStyled>
      </Container>
    </SectionContainer>
  );
};

export default FrequentQuestion;