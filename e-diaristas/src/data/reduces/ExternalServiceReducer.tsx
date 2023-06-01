import { ApiLinksInterface } from 'data/@types/ApiLinksInterface';
import { ApiService } from 'data/services/ApiService';
import { produce } from 'immer';
import React, { useReducer, useEffect } from 'react';

/*
exemplo:

let produto = { qnt: 10, preco: 2.5 };
produto = {...produto, qnt 20 }

const produto2 = produce(produto, (drafState) => {
  draftState.qnt = 9;
  return drafState;
});
*/

//typeof já pega o type pelo tipo do dado de acordo com o que for a constante
export type InitialStateType = typeof initialState;
export type ExternalServiceActionType = {
  type: string;
  payload?: unknown;
};

export const initialState = {
  externalService: [] as ApiLinksInterface[],
};

const reducer = (
  state: InitialStateType, 
  action: ExternalServiceActionType,
): InitialStateType => {
  const nextState = produce(state, (draftState) => {

    switch(action.type){
      case 'UPDATE': 
        draftState.externalService = action.payload as ApiLinksInterface[];//o action.payload vai ser uma lista de ApiLinksInterface
      break
    }

  });
  return nextState;
};  

export interface ExternalServiceReducerInterface {
  externalServicesState: InitialStateType;
  externalServicesDispatch: React.Dispatch<ExternalServiceActionType>;
}

//useReducer possui dois campos como paramêtro, campo redutor e o valor inicial da variável
export function useExternalServicesReducer(): ExternalServiceReducerInterface {
  const [state, dispatch] = useReducer(reducer, initialState);

  //aqui usamos a tipagem para obter o retorno dos dados de acordo com a interface
  useEffect(() => {
    ApiService.get<{links: ApiLinksInterface[]}>('/api').then((response) => {
      dispatch({
        type: 'UPDATE',
        payload: response.data.links,
      })
    })
  }, [])

  return {
    externalServicesState: state,
    externalServicesDispatch: dispatch,
  }
}
