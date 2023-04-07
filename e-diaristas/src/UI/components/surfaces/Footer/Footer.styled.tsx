import { Container, IconButton, Link, ListItem, Typography, LinkProps, List } from '@mui/material';
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
  margin: ${({ theme }) => theme.spacing(2,0,3)};

  img {
    width: 112px;
  }
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


export const FooterTitle = styled((props: PropsWithChildren) => (
  <Typography variant={"body2"} component={"h2"} {...props}/>
))`
font-weight: bold;
`;

export const SocialButton = styled((props: LinkProps<typeof IconButton>) => (
  <Link component={IconButton} target={"_blank"} rel={"noopener noreferrer"} {...props} />
))``;

export const FooterSocialList = styled(List)`
  display: grid;
  grid-template-columns: repeat(3, 58px);
  grid-gap: ${({ theme }) => theme.spacing(1.5)};
`;
