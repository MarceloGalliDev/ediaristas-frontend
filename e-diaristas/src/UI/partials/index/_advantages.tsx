import { Container, ListItem, ListItemAvatar } from "@mui/material";
import { AvatarStyled, GradientBackground, ListItemTextStyled, ListStyle, SectionTitle } from "./_advantages.style";

const Advantages = () => {
  const advantegeList = [
    {
      icon: "twf-woman",
      title: "Diversidade",
      description: "São mais de 5 mil profissionais esperando por você."

    },
    {
      icon: "twf-certificade",
      title: "Confiabilidade",
      description: "Todos profissionais aqui listados possuem verificação de segurança."

    },
    {
      icon: "twf-search-2",
      title: "Rastreabilidade",
      description: "Acesse o histórico dos profissionais."

    },
    {
      icon: "twf-frame-broken",
      title: "Segurança",
      description: "Seguro sobre qualquer possível dano."

    },
    {
      icon: "twf-payment",
      title: "Controle",
      description: "Pagamento é realizado somente com o profissional em seu local de destino, com confirmação."

    },
    {
      icon: "twf-broom-bucket",
      title: "Experiência",
      description: "Mais de 50 mil diarias realizadas."

    },
  ];

  return (
    <GradientBackground>
      <Container>
        <SectionTitle>
          Por que usar o E-Diaristas?
        </SectionTitle>
        <ListStyle>

          {advantegeList.map((item, index) => {
            return (
              <ListItem key={index}>
                <ListItemAvatar>
                  <AvatarStyled>
                    <i className="twf-certificate"/>
                  </AvatarStyled>
                </ListItemAvatar>
                <ListItemTextStyled primary={"Diversidade"} secondary={"Mais de 5 mil profissionais esperando por você."}/>
              </ListItem>
            )
          })}
          

        </ListStyle>
      </Container>
    </GradientBackground>
  )
};

export default Advantages;