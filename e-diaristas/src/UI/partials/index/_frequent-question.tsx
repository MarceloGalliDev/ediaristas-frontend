import {
  Wave,
  SectionContainer,
  Wave2,
  SectionTitle,
  SectionSubtitle,
} from "./_frequent-question.style";


const FrequentQuestion = () => {
  return (
    <SectionContainer>
      <Wave2  src={"/img/home/waves.svg"} />
      <SectionTitle>Ainda está com dúvida?</SectionTitle>
      <SectionSubtitle>Veja abaixo as perguntas frequentes</SectionSubtitle>
    </SectionContainer>
  );
};

export default FrequentQuestion;