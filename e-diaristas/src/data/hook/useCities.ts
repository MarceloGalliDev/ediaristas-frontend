import { CidadeInterface } from "data/@types/EnderecoInterface";
import { LocationService } from "data/services/LocationService";
import { useEffect, useState } from "react";

export default function useCities(estado: string): CidadeInterface[] {
  const [listaCidades, setListaCidades] = useState<CidadeInterface[]>([]);

  useEffect(() => {
    if(estado){
      setListaCidades([])//limpamos a memória se tiver algum carregado
      LocationService.cidades(estado).then((listaCidades) => {
        listaCidades && setListaCidades(listaCidades);
      })//lista de cidade aqui esta vindo da promise da busca em cidades()
    }
  }, [estado]);

  return listaCidades;
}