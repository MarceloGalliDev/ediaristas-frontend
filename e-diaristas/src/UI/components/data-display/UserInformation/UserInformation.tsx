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
  isRating?: boolean;
}

const UserInformation: React.FC<PropsWithChildren<UserInformationProps>> = ({
  sx,
  picture,
  name,
  rating,
  description,
}) => {
  return (
    <UserInformationContainer sx={sx} isRating>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <RatingStyled value={rating} readOnly />
      <UserName>{name}</UserName>
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation