import React, { PropsWithChildren } from "react";
import { ExternalServiceProvider } from "./ExternalServiceContext";
import { UserProvider } from "./UserContext";

//aqui vamos retornar todos os contexto contidos na aplicação
export const MainProvider: React.FC<PropsWithChildren> = ({children}) => {
return (
  <ExternalServiceProvider>
    <UserProvider>
      {children}
    </UserProvider>
  </ExternalServiceProvider>
)
};