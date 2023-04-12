import { Container, ListItem, ListItemAvatar } from "@mui/material";
import { AvatarStyled, GradientBackground, ListDivider, ListItemTextStyled, ListStyle, SectionTitle } from "./_advantages.style";

const Advantages = () => {
  const advantegeList = [
    {
      id: 1,
      icon: "twf-woman",
      title: "Diversidade",
      description: "São mais de 5 mil profissionais esperando por você.",
    },
    {
      id: 2,
      icon: "twf-certificate",
      title: "Confiabilidade",
      description: "Todos profissionais aqui listados possuem verificação de segurança.",
    },
    {
      id: 3,
      icon: "twf-search-2",
      title: "Rastreabilidade",
      description: "Acesse o histórico dos profissionais.",
    },
    {
      id: 4,
      icon: "twf-frame-broken",
      title: "Segurança",
      description: "Seguro sobre qualquer possível dano.",
    },
    {
      id: 5,
      icon: "twf-payment",
      title: "Controle",
      description:
        "Pagamento é realizado somente com o profissional em seu local de destino, com confirmação.",
    },
    {
      id: 6,
      icon: "twf-broom-bucket",
      title: "Experiência",
      description: "Mais de 50 mil diarias realizadas.",
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
              <>
                <ListDivider></ListDivider>
                <ListItem key={item.id}>
                  <ListItemAvatar>
                    <AvatarStyled>
                      <i className={item.icon}/>
                    </AvatarStyled>
                  </ListItemAvatar>
                  <ListItemTextStyled primary={item.title} secondary={item.description}/>
                </ListItem>
              </>
            )
          })}
          

        </ListStyle>
      </Container>
    </GradientBackground>
  )
};

export default Advantages;