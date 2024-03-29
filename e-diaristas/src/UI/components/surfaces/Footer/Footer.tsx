import { Box, List, Typography } from "@mui/material";
import {
  FooterContainer,
  FooterTitle,
  FooterGrid,
  FooterListItem,
  SocialContainer,
  AppList,
  FooterSocialList,
  SocialButton,
} from "./Footer.styled";
import LinkV2 from "UI/components/navigation/Links/LinksV2";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <div>
          <FooterTitle>Menu</FooterTitle>
          <List>
            <FooterListItem>
              <LinkV2
                href="/encontrar-diarista"
                mui={{ color: "inherit", variant: "body2" }}
              >Encontrar um(a) diarista
              </LinkV2>
            </FooterListItem>
            <FooterListItem>
              <LinkV2
                href="/encontrar-diarista"
                mui={{ color: "inherit", variant: "body2" }}
              >Seja um(a) diarista
              </LinkV2>
            </FooterListItem>
            <FooterListItem>
              <LinkV2
                href="/" 
                mui={{ color: "inherit", variant: "body2" }}
              >Por que usar o e-diarista
              </LinkV2>
            </FooterListItem>
            <FooterListItem>
              <LinkV2
                href="/" 
                mui={{ color: "inherit", variant: "body2" }}
              >Principais Dúvidas
              </LinkV2>
            </FooterListItem>
          </List>
        </div>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            E-Diaristas te ajuda a encontrar um profissional perfeito para
            realizar a limpeza da sua casa. Garantimos o(a) melhor profissional
            com total segurança e praticidade! São milhares de clientes
            satisfeitos por todo o país.
          </Typography>
        </Box>
        <SocialContainer>
          <div>
            <FooterTitle>Baixe nossos aplicativos</FooterTitle>
            <AppList>
              <li>
                <a
                  href="https://apps.apple.com/br/app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/img/logos/app-store.png" alt="AppStore" />
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/img/logos/google-play.png" alt="Google Play" />
                </a>
              </li>
            </AppList>
          </div>
          <FooterTitle>
            Redes Sociais
            <FooterSocialList>
              <FooterListItem>
                <SocialButton href="/">
                  <i className="twf-facebook-f" />
                </SocialButton>
              </FooterListItem>
              <FooterListItem>
                <SocialButton href="/">
                  <i className="twf-instagram" />
                </SocialButton>
              </FooterListItem>
              <FooterListItem>
                <SocialButton href="/">
                  <i className="twf-youtube" />
                </SocialButton>
              </FooterListItem>
            </FooterSocialList>
          </FooterTitle>
        </SocialContainer>
      </FooterGrid>
    </FooterContainer>
  );
  };

export default Footer;