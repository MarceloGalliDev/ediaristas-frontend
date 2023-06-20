import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import {
  Link as MuiLink,
  LinkProps as MuiLinkProps,
  ButtonProps,
} from '@mui/material';
import Router from 'next/router';
import { PropsWithChildren } from 'react';

//definindo props para nosso componente
//mui? é tipagem derivada do mui material
//Component?: React.ElementType; estamos definindo a tipagem para que seja um componente básico do react

export interface LinkProps {
  href: string;
  mui?: MuiLinkProps | ButtonProps;
  next?: NextLinkProps;
  Component?: React.ElementType;
  onClick?: () => void;
}

const Link: React.FC<PropsWithChildren<LinkProps>> = ({
  children,
  href,
  next,
  mui,
  Component = MuiLink,
  ...props
}) => {
  const isNextEnv = Boolean(Router.router);

  return (
    isNextEnv ? (
      <NextLink href={href} passHref {...next}>
        <Component {...mui} {...props}>
          {children}
        </Component>
      </NextLink>
    ) : (
      <Component href={href} {...mui} {...props}>
        {children}
      </Component>
    )
  )
};

export default Link;

//Aqui estamos sintetizando os links, pois  o link tem um comportamento diferente no NextJS
//<PropsWithChildren> é para informar que o Link também recebe a tipagem de Children
//const isNextEnv = Boolean(Router.router); temos que criar para o ambiente NextJS, para que possamos imbuti-lo no storybook, no caso estamos transformando em boleano para poder-mos ter acesso se False ou True
