import useMinhasDiarias from 'data/hook/pages/diarias/useMinhasDiarias.page';
import React, { PropsWithChildren } from 'react';
//import {  } from 'react';
//import { ComponentName } from './_minhas-diarias.styled'; 

const MinhasDiarias: React.FC<PropsWithChildren> = () => {
  const { isMobile, currentPage, setCurrentPage, totalPages, itemsPerPage } =
    useMinhasDiarias(); 

  return(
    <div>
      <div>MinhasDiarias</div>
    </div>
  )
};

export default MinhasDiarias;