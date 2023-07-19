import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import PageTitle from "UI/components/data-display/PageTitle/PageTitle";
import SideInformation from "UI/components/data-display/SideInformation/SideInformation";
import SafeEnvironment from "UI/components/feedback/SafeEnvironment/SafeEnvironment";
import { AddressForm, PageFormContainer, PictureForm, UserDataForm, UserFormContainer } from "UI/components/inputs/UserForm/UserForm";
import FinancialForm from "UI/components/inputs/UserForm/forms/FinancialForm";
import NewContactForm from "UI/components/inputs/UserForm/forms/NewContactForm";
import BreadCrumb from "UI/components/navigation/BreadCrumb/BreadCrumb";
import LinkV2 from "UI/components/navigation/Links/LinksV2";
import useCadastroDiarista from "data/hook/pages/cadastro/useCadastroDiarista.page";
import useIsMobile from "data/hook/useIsMobile";
import { BrowserService } from "data/services/BrowserService";
import type { GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import { FormProvider } from "react-hook-form";


export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Diarista',
    },
  };
};

const Index: NextPage = () => {
  const {breadcrumbsItems, step, setStep, userForm} = useCadastroDiarista(),
    isMobile = useIsMobile();

  useEffect(() => {
    BrowserService.scrollToTop();
  }, [step])

  return (
    <div>
      <SafeEnvironment />
      <BreadCrumb
        items={breadcrumbsItems}
        selected={breadcrumbsItems[step - 1]}
      />
      {step === 1 && (
        <PageTitle
          title={'Precisamos conhecer um pouco sobre você!'}
          subtitle={
            <span>
              Caso já tenha cadastro{' '}
              <LinkV2 href={'/login'}>clique aqui</LinkV2>
            </span>
          }
        />
      )}

      {step === 2 && (
        <PageTitle
          title={'Quais cidades você atenderá?'}
          subtitle={
            <span>
              Você pode escolher se aceita ou não um serviço. Então, não se
              preocupe se mora em uma grande cidade
            </span>
          }
        />
      )}

      <UserFormContainer>
        <PageFormContainer>
          {step === 1 && (
            <FormProvider {...userForm}>
              <Paper sx={{ p: 4 }} component={'form'} onSubmit={() => {}}>

                <Typography sx={{ fontWeight: 'bold', pb: 2 }}>
                  Dados pessoais
                </Typography>
                <UserDataForm cadastro={true} />

                <Divider sx={{ mb: 5 }}/>

                <Typography sx={{ fontWeight: 'bold', pb: 2 }}>
                  Financeiro
                </Typography>
                <FinancialForm />

                <Divider sx={{ mb: 5 }}/>

                <Typography sx={{ fontWeight: 'bold' }}>
                  A hora do self! Envie uma self segurando o documento.
                </Typography>
                <Typography sx={{ pb: 2 }}>
                  Para sua segurança, obrigatório para todos os profissionais e clientes.
                </Typography>
                <PictureForm />
                <Typography sx={{ pt:1, pb: 2 }}>
                  Essa foto não será vista por ninguém.
                </Typography>

                <Divider sx={{ mb: 5 }}/>

                <Typography sx={{ fontWeight: 'bold', pb: 2 }}>
                  Endereço
                </Typography>
                <AddressForm />

                <Divider sx={{ mb: 5 }}/>

                <Typography sx={{ fontWeight: 'bold', pb: 2 }}>
                  Dados de acesso
                </Typography>
                <NewContactForm />

                <Container sx={{ textAlign: 'center' }}>
                  <Button
                    variant={'contained'}
                    color={'secondary'}
                    type={'submit'}
                  >
                    Cadastrar e escolher cidades
                  </Button>
                </Container>

              </Paper>
            </FormProvider>
          )}

          {!isMobile && (
            <SideInformation
              title={'Como funciona?'}
              items={[
                {
                  title: '1 - Cadastro',
                  descricao: [
                    'Você faz o cadastro e escolhe as cidades atendidas',
                  ],
                },
                {
                  title: '2 - Receba propostas',
                  descricao: [
                    'Você receberá avisos por e-mail sobre novos serviços nas cidades atendidas',
                  ],
                },
                {
                  title: '3 - Diária agendada',
                  descricao: [
                    'Se o seu perfil for escolhido pelo cliente, você receberá a confirmação do agendamento',
                  ],
                },
              ]}
            />
          )}
        </PageFormContainer>
      </UserFormContainer>
    </div>
  );
}

export default Index;

//pegamos o breadcrumb e colocamos na posição step, que é igual a 1, e subtraímos para termos a posição 0