import { ExternalServiceReducerInterface, initialState, useExternalServicesReducer } from 'data/reduces/ExternalServiceReducer';
import React, { PropsWithChildren, createContext } from 'react';

const initialValue: ExternalServiceReducerInterface = {
  externalServicesDispatch: () => {},
  externalServicesState: initialState,
}

//criando contexto, createContext() é sempre inicializado com um valor default
//iniciamos o contexto com uma função vazia e um array de links vazios
export const ExternalServiceContext = createContext(initialValue);

//sempre que usarmos essa função, sabemos que estamos usando um provider do contexto
//qualquer componente children, o componente vai receber os dados do context
export const ExternalServiceProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const provider = useExternalServicesReducer();

  return (
    //aqui passamos os valores do provider para dentro do componente
    <ExternalServiceContext.Provider value={provider}>
      {children}
    </ExternalServiceContext.Provider>
  );
}