import { Container, Divider, IconButton, MenuItem, MenuList, Toolbar } from "@mui/material";
import {
  HeaderAppBar,
  HeaderLogo,
  ButtonsContainer,
  HeaderDrawer,
} from "./Header.styled"; 
import Link from "UI/components/navigation/Links/Links";
import RoundedButton from "UI/components/inputs/RoundedButton/RoundedButton";

const Header: React.FC = () => {
  return <HeaderMobile />;
};

export default Header;


const HeaderDesktop: React.FC = () => {
  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <Link href="/">
          <HeaderLogo src="img/logos/logo.svg" alt="e-diaristas"/>
        </Link>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <ButtonsContainer>
          <Link 
            Component={RoundedButton} 
            mui={{variant: "contained", color: "primary"}} 
            href="/cadastro/diarista"
          >Seja um(a) diarista
          </Link>
          <Link href="/login">Login</Link>
        </ButtonsContainer>
      </Toolbar>
    </HeaderAppBar>)
};

const HeaderMobile: React.FC = () => {
  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <IconButton>
          <i className="twf-bars"/>
        </IconButton>
        <Link href="/">
          <HeaderLogo src="img/logos/logo.svg" alt="e-diaristas" />
        </Link>
        <HeaderDrawer open={false}>
          <MenuList>
            <Link href="/login" Component={MenuItem}>
              Login
            </Link>
            <Divider />
            <Link href="/cadastro/diarista" Component={MenuItem}>
              Seja um(a) diarista
            </Link>
          </MenuList>
        </HeaderDrawer>
      </Toolbar>
    </HeaderAppBar>
  );
};


 