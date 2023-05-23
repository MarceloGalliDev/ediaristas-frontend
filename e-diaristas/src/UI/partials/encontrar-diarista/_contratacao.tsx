import PageTitle from 'UI/components/data-display/PageTitle/PageTitle';
import SafeEnvironment from 'UI/components/feedback/SafeEnvironment/SafeEnvironment';
import { UserFormContainer } from 'UI/components/inputs/UserForm/UserForm';
import BreadCrumb from 'UI/components/navigation/BreadCrumb/BreadCrumb';
import useContratacao from 'data/hook/pages/useContratacao.page';
import useIsMobile from 'data/hook/useIsMobile';
import React, { PropsWithChildren } from 'react';
//import {  } from 'react';
//import { ComponentName } from './_contratacao.styled'; 

const Contratacao: React.FC<PropsWithChildren> = () => {
  const {step, breadcrumbItems} = useContratacao()
  const isMobile = useIsMobile();
  return (
    <div>
      {!isMobile && <SafeEnvironment />}
      <BreadCrumb selected={breadcrumbItems[step - 1]} items={breadcrumbItems} />
      {step == 1 && <PageTitle title='Nos conte um pouco sobre o serviço!' />}
      <UserFormContainer></UserFormContainer>
    </div>
  );
};

export default Contratacao;