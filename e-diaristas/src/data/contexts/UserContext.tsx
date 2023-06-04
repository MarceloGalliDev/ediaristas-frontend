
import { UserReducerInterface, initialState, useUserReducer } from 'data/reduces/UserReducer';
import React, { PropsWithChildren, createContext } from 'react';

const initialValue: UserReducerInterface = {
  useDispatch: () => {},
  useState: initialState,
}

//criando contexto, createContext() é sempre inicializado com um valor default
//iniciamos o contexto com uma função vazia e um array de links vazios
export const UserContext = createContext(initialValue);

//sempre que usarmos essa função, sabemos que estamos usando um provider do contexto
//qualquer componente children, o componente vai receber os dados do context
export const UserProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const provider = useUserReducer();

  return (
    //aqui passamos os valores do provider para dentro do componente
    <UserContext.Provider value={provider}>
      {children}
    </UserContext.Provider>
  );
}