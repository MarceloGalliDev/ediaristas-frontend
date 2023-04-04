import NextLink from 'next/link'
import { Link as MuiLink } from "@mui/material"
import { PropsWithChildren } from 'react';
import Router from 'next/router';

const Link: React.FC<PropsWithChildren> = ({ children }) => {
  const isNextEnv = Boolean(Router.router);

  return isNextEnv ? (
    <NextLink href="#" passHref>
      <MuiLink>
        {children}
      </MuiLink>
    </NextLink>
  ) : (
    <MuiLink>{children}</MuiLink>
  )
};

export default Link;

//Aqui estamos sintetizando os links, pois  o link tem um comportamento diferente no NextJS
//<PropsWithChildren> é para informar que o Link também recebe a tipagem de Children
//const isNextEnv = Boolean(Router.router); temos que criar para o ambiente NextJS, para que possamos imbuti-lo no storybook, no caso estamos transformando em boleano para poder-mos ter acesso se False ou True
