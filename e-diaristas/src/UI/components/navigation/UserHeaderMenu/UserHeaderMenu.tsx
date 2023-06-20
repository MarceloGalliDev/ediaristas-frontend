import { UserInterface } from 'data/@types/UserInterface';
import React, {PropsWithChildren, useRef} from 'react';
import { UserHeaderMenuContainer, UserMenu } from './UserHeaderMenu.styled';
import UserProfileAvatar from 'UI/components/data-display/UserProfileAvatar/UserProfileAvatar';
import Link from '../Links/Links';
// import {} from '@mui/material';
// import {} from './UserHeaderMenu.styled';

export interface UserHeaderMenuProps {
  user: UserInterface;
  isMenuOpen: boolean;
  onClick: (event: React.MouseEvent) => void;
  onLogout?: () => void;
  onMenuClick?: (event: React.MouseEvent) => void;
  onMenuClose?: (event: React.MouseEvent) => void;

}

const UserHeaderMenu:React.FC<PropsWithChildren<UserHeaderMenuProps>> = (props) => {
  const containerRef = useRef(null)
  return (
    <UserHeaderMenuContainer ref={containerRef}>
      <UserProfileAvatar 
        user={props.user}
        onClick={props.onClick}
      />
      <UserMenu 
        open={props.isMenuOpen}
        anchorEl={containerRef.current}
        onClose={props.onMenuClose}
        onClick={props.onMenuClick}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <li>
          <Link 
            href={'/alterar-dados'}
          >
            Alterar dados
          </Link>
        </li>
        <li>
          <Link 
            href={''} 
            onClick={props.onLogout} 
            mui={{ color: 'inherit'}}
          >
            Sair
          </Link>
        </li>
      </UserMenu>
    </UserHeaderMenuContainer>
  )  
}

export default UserHeaderMenu