import Contratacao from "@partials/encontrar-diarista/_contratacao";
import VerificarProfissionais from "@partials/encontrar-diarista/_verificar-profissionais";
import useEncontrarDiarista from "data/hook/pages/useEncontrarDiarista.page";
import type { NextPage, GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Encontrar Diarista',
    },
  };
};


const Index: NextPage = () => {
  const { podeContratar, setPodeContratar } = useEncontrarDiarista();

  return (
    <div>
      {!podeContratar ? (
        <VerificarProfissionais onContratarProfissionais={() => setPodeContratar(true)}/>
      ) : (
        <Contratacao />
      )}
    </div>
  )}
  
  export default Index;