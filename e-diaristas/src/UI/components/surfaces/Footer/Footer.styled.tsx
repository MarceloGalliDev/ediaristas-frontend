import { Container, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PropsWithChildren } from 'react';

export const SocialContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const AppList = styled('ul')`
  display: flex;
  gap: ${({ theme }) => theme.spacing()};
  list-style-type: none;
  padding: 0;
`;

export const FooterContainer = styled('footer')`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: ${({ theme }) => theme.spacing(4,0)};
`;

export const FooterGrid = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
`;

export const FooterListItem = styled((props: PropsWithChildren) => (
  <ListItem disableGutters {...props} />
))``;

export const FooterTitle1 = styled((props: PropsWithChildren) => (
  <Typography variant={"body2"} component={"h2"} {...props}/>
))`
  font-weight: bold;
`;

