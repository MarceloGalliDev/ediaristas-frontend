import { DiariaInterface } from "data/@types/DiariaInterface";
import { UserContext } from "data/contexts/UserContext";
import useApiHateoas from "data/hook/useApi.hook";
import { produce } from 'immer'
import { useContext, useEffect, useReducer } from "react";

export const initialState = {
  diarias: [] as DiariaInterface[],
  isFetching: true,
};

type InitialStateType = typeof initialState;

//ação a ser atualizada de acordo com os objetos apontados no initialState
type DiariaAction = 'SET_DIARIA' | 'SET_FETCHING';

export type DiariaActionType = {
  type: DiariaAction;
  payload?: unknown;
};

const reducer = (
  state: InitialStateType,
  action: DiariaActionType,
): InitialStateType => {
  const nextState = produce(state, (draftState) => {
    switch (action.type) {
      case 'SET_DIARIA': 
        draftState.diarias = action.payload as DiariaInterface[]
        draftState.isFetching = false;
        break;
      case 'SET_FETCHING':
        draftState.isFetching = action.payload as boolean;
        break;
    }
  });

  return nextState;
};

export interface DiariaReducerInterface {
  diariaState: InitialStateType,
  diariaDispatch: React.Dispatch<DiariaActionType>
}

export function useDiariaReducer(): DiariaReducerInterface {
  //hook de useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  //dados do contexto do user
  const { userState } = useContext(UserContext);

  //consultando o hateoas para buscar o link de vínculo, do usuario logado
  const diarias = useApiHateoas<DiariaInterface[]>(userState.user.links, 'lista_diarias').data;

  useEffect(() => {
    if(diarias) {
      dispatch({ type: 'SET_DIARIA', payload: diarias})
    }
  }, [diarias]);

  return {
    diariaState: state,
    diariaDispatch: dispatch,
  }
};

//quando chamar o dispatch, vai executar o reducer, que vai passar pelo produce, e verifica o tipo de execução, e vamos parar na diarias, pois estamos selecionando as diárias, logo ele vai executar o payload e estamos com a diarias na requisição, ele vai atualizar a lista de diarias iniciais