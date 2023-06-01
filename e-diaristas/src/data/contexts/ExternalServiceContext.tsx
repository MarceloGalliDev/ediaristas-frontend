import { createContext } from 'react';

//criando contexto, createContext() é sempre inicializado com um valor default
export const ExternalServiceContext = createContext({});

//sempre que usarmos essa função, sabemos que estamos usando um provider do contexto
//qualquer componente children, o componente vai receber os dados do context
export const ExternalServiceProvider = () => {
  return (
    <ExternalServiceContext.Provider value={{}}>
      {/* <Componente /> */}
    </ExternalServiceContext.Provider>)
}