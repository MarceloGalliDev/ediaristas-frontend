import { Container, Divider, IconButton, MenuItem, MenuList, Toolbar } from "@mui/material";
import {
  HeaderAppBar,
  HeaderLogo,
  ButtonsContainer,
  HeaderDrawer,
} from "./Header.styled"; 
import Link from "UI/components/navigation/Links/Links";
import LinkV2 from "UI/components/navigation/Links/LinksV2";
import RoundedButton from "UI/components/inputs/RoundedButton/RoundedButton";
import { useState } from "react";
import useIsMobile from "data/hook/useIsMobile";


const Header: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    isMobile ? <HeaderMobile /> : <HeaderDesktop />
  )
};
export default Header;

const HeaderDesktop: React.FC = () => {
  return (
    <HeaderAppBar position="sticky">
      <Toolbar component={Container}>
        <LinkV2 href="/">
          <HeaderLogo src="img/logos/logo.svg" alt="e-diaristas"/>
        </LinkV2>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <ButtonsContainer>
          <RoundedButton variant="contained" color="primary">
            <LinkV2 
              href="/cadastro/diarista"
            >Seja um(a) diarista
            </LinkV2>
          </RoundedButton>
          <RoundedButton variant="contained" color="secondary">
            <LinkV2 
              href="/login"
            >Login
            </LinkV2>
          </RoundedButton>
        </ButtonsContainer>
      </Toolbar>
    </HeaderAppBar>)
};

const HeaderMobile: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <IconButton
          edge={"start"}
          color={"inherit"}
          onClick={() => setIsDrawerOpen(true)}
        >
          <i className="twf-bars" />
        </IconButton>
        <LinkV2 href="/">
          <HeaderLogo src="img/logos/logo.svg" alt="e-diaristas" />
        </LinkV2>
        <HeaderDrawer 
          open={isDrawerOpen} 
          onClose={() => setIsDrawerOpen(false)}
          onClick={() => setIsDrawerOpen(false)}
        >
          <MenuList>
            <LinkV2 href="/login" Component={MenuItem}>
              Login
            </LinkV2>
            <Divider />
            <LinkV2 href="/cadastro/diarista" Component={MenuItem}>
              Seja um(a) diarista
            </LinkV2>
          </MenuList>
        </HeaderDrawer>
      </Toolbar>
    </HeaderAppBar>
  );
};


 