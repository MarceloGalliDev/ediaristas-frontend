import { Container, ListItem, ListItemAvatar } from "@mui/material";
import { AvatarStyled, GradientBackground, ListItemTextStyled, ListStyle, SectionTitle } from "./_advantages.style";

const Advantages = () => {
  return (
    <GradientBackground>
      <Container>
        <SectionTitle>
          Por que usar o E-Diaristas?
        </SectionTitle>
        <ListStyle>

          <ListItem>
            <ListItemAvatar>
              <AvatarStyled>
                <i className="twf-certificate"/>
              </AvatarStyled>
            </ListItemAvatar>
            <ListItemTextStyled primary={"Diversidade"} secondary={"Mais de 5 mil profissionais esperando por você."}/>
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <AvatarStyled>
                <i className="twf-certificate"/>
              </AvatarStyled>
            </ListItemAvatar>
            <ListItemTextStyled primary={"Diversidade"} secondary={"Mais de 5 mil profissionais esperando por você."}/>
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <AvatarStyled>
                <i className="twf-certificate"/>
              </AvatarStyled>
            </ListItemAvatar>
            <ListItemTextStyled primary={"Diversidade"} secondary={"Mais de 5 mil profissionais esperando por você."}/>
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <AvatarStyled>
                <i className="twf-certificate"/>
              </AvatarStyled>
            </ListItemAvatar>
            <ListItemTextStyled primary={"Diversidade"} secondary={"Mais de 5 mil profissionais esperando por você."}/>
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <AvatarStyled>
                <i className="twf-certificate"/>
              </AvatarStyled>
            </ListItemAvatar>
            <ListItemTextStyled primary={"Diversidade"} secondary={"Mais de 5 mil profissionais esperando por você."}/>
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <AvatarStyled>
                <i className="twf-certificate"/>
              </AvatarStyled>
            </ListItemAvatar>
            <ListItemTextStyled primary={"Diversidade"} secondary={"Mais de 5 mil profissionais esperando por você."}/>
          </ListItem>

        </ListStyle>
      </Container>
    </GradientBackground>
  )
};

export default Advantages;