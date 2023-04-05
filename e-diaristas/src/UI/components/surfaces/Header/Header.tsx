import { Container, Toolbar } from "@mui/material";
import { HeaderAppBar, HeaderLogo } from "./Header.styled"; 
import logo from "../../../../../public/img/logos/logo.svg"; 

const HeaderDesktop: React.FC = () => {
  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <HeaderLogo src={logo}/>
      </Toolbar>
    </HeaderAppBar>)
};

const Header: React.FC = () => {
  return <HeaderDesktop/>
  
};

export default Header;