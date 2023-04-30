import React, {PropsWithChildren} from 'react';
import { SystemProps } from '@mui/system'
// import {} from '@mui/material';
import { UserInformationContainer, UserName, UserDescription, AvatarStyled, RatingStyled } from './UserInformation.styled';

export interface UserInformationProps {
  name: string;
  picture: string;
  rating: number;
  description?: string;
  sx?: SystemProps
}

const UserInformation:React.FC<PropsWithChildren<UserInformationProps>> = ({sx, picture}) => {
  return (
    <UserInformationContainer sx={sx}>
      <AvatarStyled src={picture}></AvatarStyled>
    </UserInformationContainer>
  );  
}

export default UserInformation