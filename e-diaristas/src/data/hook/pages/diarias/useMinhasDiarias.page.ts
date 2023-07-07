import { DiariaInterface } from "data/@types/DiariaInterface";
import { DiariaContext } from "data/contexts/DiariaContext";
import useIsMobile from "data/hook/useIsMobile";
import usePagination from "data/hook/usePagination.hook";
import { linksResolver } from "data/services/ApiService";
import { useContext } from "react";

export default function useMinhasDiarias() {
  const isMobile = useIsMobile(),
    {
      diariaState: { diarias },
    } = useContext(DiariaContext),
    filteredData = diarias,
    { currentPage, setCurrentPage, totalPages, itemsPerPage } = usePagination(
      diarias,
      5
    );
    
    function podeVisualizar(diaria: DiariaInterface): boolean {
      //esse self esta dentro do devtools > rede > pré-visualização > diarias > links {type}
      return linksResolver(diaria.links, 'self') !== undefined;
    }

    function podeCancelar(diaria: DiariaInterface): boolean {
      //esse self esta dentro do devtools > rede > pré-visualização > diarias > links {type}
      return linksResolver(diaria.links, 'cancelar_diaria') !== undefined;
    }

    function podeConfirmar(diaria: DiariaInterface): boolean {
      //esse self esta dentro do devtools > rede > pré-visualização > diarias > links {type}
      return linksResolver(diaria.links, 'confirmar_diarista') !== undefined;
    }

    function podeAvaliar(diaria: DiariaInterface): boolean {
      //esse self esta dentro do devtools > rede > pré-visualização > diarias > links {type}
      return linksResolver(diaria.links, 'avaliar_diaria') !== undefined;
    }

  return {
    isMobile,
    currentPage,
    setCurrentPage,
    totalPages,
    itemsPerPage,
    filteredData,
    podeVisualizar,
    podeCancelar,
    podeConfirmar,
    podeAvaliar,
  };
}