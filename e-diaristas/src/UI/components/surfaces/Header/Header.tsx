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
import { useEffect, useState } from "react";
import useIsMobile from "data/hook/useIsMobile";
import { UserInterface, UserType } from "data/@types/UserInterface";
import UserHeaderMenu from "UI/components/navigation/UserHeaderMenu/UserHeaderMenu";
import UserProfileAvatar from "UI/components/data-display/UserProfileAvatar/UserProfileAvatar";

interface HeaderProps { 
  user: UserInterface;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const isMobile = useIsMobile();

  return isMobile ? <HeaderMobile {...props} /> : <HeaderDesktop {...props} />;
};

export default Header;

const HeaderDesktop: React.FC<HeaderProps> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const hasUser = props.user.nome_completo.length > 0; //esse código referência se o usuarios está logado ou não
  const userType = props.user.tipo_usuario;

  useEffect(() => {
    if(!hasUser) {
      setIsMenuOpen(false);
    }
  }, [hasUser])

  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <LinkV2 href="/">
          <HeaderLogo src="img/logos/logo.svg" alt="e-diaristas" />
        </LinkV2>

        <ButtonsContainer>
          {hasUser && (
            <>
              {userType === UserType.Diarista ? (
                <Link href={'/oportunidades'} Component={RoundedButton}>
                  Oportunidades
                </Link>
              ) : (
                <Link href={'/encontrar-diarista'} Component={RoundedButton}>
                  Encontrar diarista
                </Link>
              )}
              <Link href={'/diarias'} Component={RoundedButton}>
                Diárias
              </Link>
              {userType === UserType.Diarista && (
                <Link href="/pagamentos" Component={RoundedButton}>
                  Pagamentos
                </Link>
              )}
            </>
          )}
        </ButtonsContainer>

        <div>&nbsp;</div>

        {hasUser ? (
          <UserHeaderMenu
            user={props.user}
            isMenuOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
            onMenuClick={() => setIsMenuOpen(true)}
            onMenuClose={() => setIsMenuOpen(false)}
            onLogout={props.onLogout}
          />
        ) : (
          <ButtonsContainer>
            <RoundedButton variant="contained" color="primary">
              <LinkV2 href="/cadastro/diarista">Seja um(a) diarista</LinkV2>
            </RoundedButton>
            <RoundedButton variant="contained" color="secondary">
              <LinkV2 href="/login">Login</LinkV2>
            </RoundedButton>
          </ButtonsContainer>
        )}
      </Toolbar>
    </HeaderAppBar>
  );
};

const HeaderMobile: React.FC<HeaderProps> = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const hasUser = props.user.nome_completo.length > 0;
  const userType = props.user.tipo_usuario;


  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <IconButton
          edge={'start'}
          color={'inherit'}
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
          {hasUser ? (
            <>
              <UserProfileAvatar user={props.user} />
              <MenuList>
                {userType === UserType.Diarista ? (
                  <LinkV2 href={'/oportunidades'} Component={MenuItem}>
                    Oportunidades
                  </LinkV2>
                ) : (
                  <LinkV2 href={'/encontrar-diarista'} Component={MenuItem}>
                    Encontrar diarista
                  </LinkV2>
                )}
                <LinkV2 href={'/diarias'} Component={MenuItem}>
                  Diárias
                </LinkV2>
                {userType === UserType.Diarista && (
                  <LinkV2 href={'/pagamentos'} Component={MenuItem}>
                    Pagamentos
                  </LinkV2>
                )}

                <Divider />

                <LinkV2 href={'/alterar-dados'} Component={MenuItem}>
                  Alterar dados
                </LinkV2>
                <LinkV2 href={''} Component={MenuItem} onClick={props.onLogout}>
                  Alterar dados
                </LinkV2>
              </MenuList>
            </>
          ) : (
            <MenuList>
              <LinkV2 href="/login" Component={MenuItem}>
                Login
              </LinkV2>
              <Divider />
              <LinkV2 href="/cadastro/diarista" Component={MenuItem}>
                Seja um(a) diarista
              </LinkV2>
            </MenuList>
          )}
        </HeaderDrawer>
      </Toolbar>
    </HeaderAppBar>
  );
};


 