import { Container, Typography } from "@mui/material";
import { LoginButton, LoginContainer } from "@styles/pages/login.styled";
import PageTitle from "UI/components/data-display/PageTitle/PageTitle";
import SafeEnvironment from "UI/components/feedback/SafeEnvironment/SafeEnvironment";
import { LoginForm } from "UI/components/inputs/UserForm/forms/LoginForm";
import useLogin from "data/hook/pages/useLogin.page";
import type { GetStaticProps, NextPage } from "next";
import { FormProvider } from "react-hook-form";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'login',
    }
  }
}

const Index: NextPage = () => {
  const { formMethods } = useLogin()
  return (
    <FormProvider {...formMethods}>
      <SafeEnvironment />
      <Container>
        <PageTitle title={"Informe seu email e senha"} />
        <LoginContainer
          as={'form'}
          onSubmit={formMethods.handleSubmit()}
        >
          <LoginForm />
          <Typography
            color={'error'}
            align={"center"}
          >
            Erro
          </Typography>
          <LoginButton
            variant={"contained"}
            size={"large"}
            color={"secondary"}
            type={"submit"}
          >
            Entrar
          </LoginButton>
        </LoginContainer>
      </Container>
      
    </FormProvider>
  )
}

export default Index;