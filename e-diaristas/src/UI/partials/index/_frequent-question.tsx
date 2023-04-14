import { AccordionDetails, AccordionSummary, Container, Typography } from "@mui/material";
import {
  Wave,
  SectionContainer,
  Wave2,
  SectionTitle,
  SectionSubtitle,
  AccordionStyled,
} from "./_frequent-question.style";
import { useState } from "react";

const questionsList = [
  {
    question: "Dúvida 1",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reprehenderit cum minima, tenetur provident enim. Commodi quaerat delectus inventore libero dignissimos, illum dolor aperiam adipisci quod ad non eaque modi.",
  },
  {
    question: "Dúvida 2",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit amet corrupti voluptas corporis laborum. Ipsam perspiciatis veniam ut omnis nihil veritatis aspernatur, nisi reiciendis et iusto consectetur, nostrum error natus.",
  },
  {
    question: "Dúvida 3",
    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, expedita? Atque laborum tenetur neque dolor maxime ut blanditiis dolore dignissimos! Odit sunt nobis ab eligendi voluptates amet quibusdam eius assumenda!",
  },
  {
    question: "Dúvida 4",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur cumque impedit. Voluptas nisi qui illum sit doloribus! Accusamus repudiandae totam vero repellat ducimus alias quidem. Quasi mollitia laudantium corrupti?",
  }
]

const FrequentQuestion = () => {
  const [activeAccordion, setActiveAccordion] = useState(0)

  function isOpen(accordionIndex: number): boolean {
    return activeAccordion === accordionIndex
  };

  function changeOpenAccordion(accordionIndex: number): void {
    if(isOpen(accordionIndex)){
      setActiveAccordion(0);
    }else{
      setActiveAccordion(accordionIndex)
    }
  };

  function getIcons(accordionIndex: number): string {
    return isOpen(accordionIndex) ? "twf-minus" : "twf-plus";
  };

  return (
    <SectionContainer>
      <Wave2  src={"/img/home/waves.svg"} />
      <Container>
        <SectionTitle>Ainda está com dúvida?</SectionTitle>
        <SectionSubtitle>Veja abaixo as perguntas frequentes</SectionSubtitle>

          {questionsList.map((item, index) => (
            <AccordionStyled 
              key={index}
              expanded={isOpen(index + 1)}
              onChange={() => changeOpenAccordion(index + 1)}
            >
              <AccordionSummary expandIcon={<i className={getIcons(index + 1)} />}>
                <Typography color={'primary'}>
                  {item.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </AccordionStyled>
          ))}


      </Container>
    </SectionContainer>
  );
};

export default FrequentQuestion;