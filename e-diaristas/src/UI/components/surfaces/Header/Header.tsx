import {
  Container,
  Divider,
  IconButton,
  MenuItem,
  MenuList,
  Toolbar,
} from '@mui/material';
import {
  HeaderAppBar,
  HeaderLogo,
  ButtonsContainer,
  HeaderDrawer,
} from './Header.styled';
import RoundedButton from 'UI/components/inputs/RoundedButton/RoundedButton';
import { useState } from 'react';
import { UserInterface, UserType } from 'data/@types/UserInterface';
import UserHeaderMenu from 'UI/components/navigation/UserHeaderMenu/UserHeaderMenu';
import { useEffect } from 'react';
import UserProfileAvatar from 'UI/components/data-display/UserProfileAvatar/UserProfileAvatar';
import useIsMobile from 'data/hook/useIsMobile';
import LinkV2 from 'UI/components/navigation/Links/LinksV2';

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
  const hasUser = props.user.nome_completo.length > 0,
    userType = props.user.tipo_usuario,
    [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!hasUser) {
      setIsMenuOpen(false);
    }
  }, [hasUser]);
  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <LinkV2 href="/">
          <HeaderLogo src="/img/logos/logo.svg" alt="e-diarista" />
        </LinkV2>

        <ButtonsContainer>
          {hasUser && (
            <>
              {userType === UserType.Diarista ? (
                <LinkV2 href="/oportunidades" Component={RoundedButton}>
                  Oportunidades
                </LinkV2>
              ) : (
                <LinkV2 href="/encontrar-diarista" Component={RoundedButton}>
                  Encontrar Diarista
                </LinkV2>
              )}
              <LinkV2 href="/diarias" Component={RoundedButton}>
                Diárias
              </LinkV2>
              {userType === UserType.Diarista && (
                <LinkV2 href="/pagamentos" Component={RoundedButton}>
                  Pagamentos
                </LinkV2>
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
            onMenuClick={() => setIsMenuOpen(false)}
            onMenuClose={() => setIsMenuOpen(false)}
            onLogout={props.onLogout}
          />
        ) : (
          <ButtonsContainer>
            <LinkV2
              Component={RoundedButton}
              mui={{ variant: 'contained', color: 'primary' }}
              href="/cadastro/diarista"
            >
              Seja um(a) diarista
            </LinkV2>
            <LinkV2 href="/login" Component={RoundedButton}>
              Login
            </LinkV2>
          </ButtonsContainer>
        )}
      </Toolbar>
    </HeaderAppBar>
  );
};

const HeaderMobile: React.FC<HeaderProps> = (props) => {
  const [isDraweroPen, setDrawerOpen] = useState(false),
    hasUser = props.user.nome_completo.length > 0,
    userType = props.user.tipo_usuario;

  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <IconButton
          edge={'start'}
          color={'inherit'}
          onClick={() => setDrawerOpen(true)}
        >
          <i className="twf-bars" />
        </IconButton>
        <LinkV2 href="/">
          <HeaderLogo src="/img/logos/logo.svg" alt="e-diarista" />
        </LinkV2>
        <HeaderDrawer
          open={isDraweroPen}
          onClose={() => setDrawerOpen(false)}
          onClick={() => setDrawerOpen(false)}
        >
          {hasUser ? (
            <>
              <UserProfileAvatar user={props.user} />
              <MenuList>
                {userType === UserType.Diarista ? (
                  <LinkV2 href="/oportunidades" Component={MenuItem}>
                    Oportunidades
                  </LinkV2>
                ) : (
                  <LinkV2 href="/encontrar-diarista" Component={MenuItem}>
                    Encontrar Diarista
                  </LinkV2>
                )}

                <LinkV2 href="/diarias" Component={MenuItem}>
                  Diária
                </LinkV2>
                {userType === UserType.Diarista && (
                  <LinkV2 href="/pagamentos" Component={MenuItem}>
                    Pagamentos
                  </LinkV2>
                )}
                <Divider />
                <LinkV2 href="/alterar-dados" Component={MenuItem}>
                  Alterar Dados
                </LinkV2>
                <LinkV2 href="" Component={MenuItem} onClick={props.onLogout}>
                  Sair
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
