import React, {PropsWithChildren} from 'react';
// import {} from '@mui/material';
// import {} from './UserInformation.styled';

export interface UserInformationProps {
  name: string;
  picture: string;
  rating: string;
  description?: string;
}

const UserInformation:React.FC<PropsWithChildren<UserInformationProps>> = () => {
  return (
    <div>UserInformation</div>
  )  
}

export default UserInformation