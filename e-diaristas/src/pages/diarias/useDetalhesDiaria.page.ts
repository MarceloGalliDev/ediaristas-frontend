import { DiariaInterface } from "data/@types/DiariaInterface";
import { UserInterface } from "data/@types/UserInterface";
import { DiariaContext } from "data/contexts/DiariaContext";
import { ApiServiceHateoas } from "data/services/ApiService";
import { useContext, useEffect, useState } from "react";


export default function useDetalhesDiaria(diariaId: string) {
  const {
      diariaState: { diarias },
    } = useContext(DiariaContext),
    [diaria, setDiaria] = useState({} as DiariaInterface),
    //[diaria, setDiaria] = useState<DiariaInterface>(),
    [cliente, setCliente] = useState({} as UserInterface),
    [diarista, setDiariarista] = useState({} as UserInterface);

  useEffect(() => {
    if(diarias.length){
      getDiaria(diarias, diariaId)
    }
  }, [diarias, diariaId])

  async function getDiaria(diarias: DiariaInterface[], diariaId: string) {
    //+diariaId ela é uma string que usando o + transforma em number
    const diariaSelecionada = diarias.find((diaria) => diaria.id === +diariaId);

    if (diariaSelecionada) {
      ApiServiceHateoas(diariaSelecionada.links, 'self', async (request) => {
        //dentro da desestruturação estamos renomeando data para diariaCompleta
        const { data: diariaCompleta } = await request<DiariaInterface>();

        if (diariaCompleta) {
          setDiaria(diariaCompleta);
          diariaCompleta.diarista && setDiariarista(diariaCompleta.diarista)
          diariaCompleta.cliente && setCliente(diariaCompleta.cliente)
        }
      })
    }
  }

  return {diaria, cliente, diarista}
}
