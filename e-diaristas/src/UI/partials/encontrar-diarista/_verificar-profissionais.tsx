import { Button, Typography, Container, CircularProgress } from '@mui/material';
import PageTitle from 'UI/components/data-display/PageTitle/PageTitle';
import SafeEnvironment from 'UI/components/feedback/SafeEnvironment/SafeEnvironment';
import React, { PropsWithChildren } from 'react';
//import {  } from 'react';
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "./_verificar-profissionais.styled"; 
import TextFieldMask from 'UI/components/inputs/TextFieldMask/TextFieldMask';
import UserInformation from 'UI/components/data-display/UserInformation/UserInformation';
import { color } from '@storybook/theming';
import useVerificarProfissionais from 'data/hook/pages/useVerificarProfissionais.page';

const VerificarProfissionais: React.FC<PropsWithChildren> = () => {
  const {
    cep,
    setCep,
    cepValido,
    error,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
    buscarProfissionais,
  } = useVerificarProfissionais();

  return (
    <>
      <SafeEnvironment />
      <PageTitle
        title="Conheça os profissionais"
        subtitle="Preencha seu CEP e veja todos profissionais de sua localidade"
      />
      <Container sx={{ mb: 10 }}>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99999-999"}
            label={"Digite seu CEP"}
            fullWidth
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />

          {error && (<Typography color={"error"}>CEP não encontrado!</Typography>)}

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20}/> : "Buscar"}
          </Button>

        </FormElementsContainer>

        { buscaFeita && (
          diaristas.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                {diaristas.map((diarista, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={diarista.nome_completo}
                      picture={diarista.foto_usuario ?? ''}
                      rating={diarista.reputacao ?? 0}
                      description={diarista.cidade}
                    />
                  )
                })}
              </ProfissionaisContainer>

              <Container sx={{ textAlign: "center" }}>
                {diaristasRestantes > 0 && 
                  (<Typography
                    variant={"body2"}
                    color={"textSecondary"}
                    sx={{ mt: 5 }}
                  >
                    ...e mais {diaristasRestantes} {diaristasRestantes > 1 ? ' profissionais atendem ' : ' profissional atende '}
                  </Typography>)
                }
                <Button variant={"contained"} color={"secondary"} sx={{ mt: 5 }}>
                  Contratar um(a) profissional
                </Button>
              </Container>
            </ProfissionaisPaper>
          ) : <Typography align='center' color="textPrimary">Não temos profssionais nessa região!</Typography>
        )}
      </Container>
    </>
  );
};

export default VerificarProfissionais;