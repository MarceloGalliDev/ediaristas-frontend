import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { Link as MuiLink, LinkProps as MuiLinkProps, ButtonProps } from "@mui/material"
import { PropsWithChildren } from 'react';
import Router from 'next/router';

//definindo props para nosso componente
//mui? é tipagem derivada do mui material
//Component?: React.ElementType; estamos definindo a tipagem para que seja um componente básico do react

interface LinkProps {
  href: string;
  mui?: MuiLinkProps | ButtonProps;
  next?: NextLinkProps;
  Component?: React.ElementType;
}

const Link: React.FC<PropsWithChildren<LinkProps>> = ({ 
  children,
  href,
  mui,
  next,
  Component = MuiLink,
  ...props
 }) => {
  const isNextEnv = Boolean(Router.router);

  return isNextEnv ? (
    <NextLink 
      href={href}
      {...next} 
      passHref
    >
      <Component
        {...mui}
        {...props}
      >
        {children}
      </Component>
    </NextLink>
  ) : (
    <Component 
      href={href}
      {...mui}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Link;

//Aqui estamos sintetizando os links, pois  o link tem um comportamento diferente no NextJS
//<PropsWithChildren> é para informar que o Link também recebe a tipagem de Children
//const isNextEnv = Boolean(Router.router); temos que criar para o ambiente NextJS, para que possamos imbuti-lo no storybook, no caso estamos transformando em boleano para poder-mos ter acesso se False ou True
