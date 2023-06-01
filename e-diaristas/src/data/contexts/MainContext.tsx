import React, { PropsWithChildren } from "react";
import { ExternalServiceProvider } from "./ExternalServiceContext";

//aqui vamos retornar todos os contexto contidos na aplicação
export const MainProvider: React.FC<PropsWithChildren> = ({children}) => {
return (
  <ExternalServiceProvider>
    {/* meu segundo contexto AQUI e o children aqui dentro */}
    {children}
  </ExternalServiceProvider>
)
};