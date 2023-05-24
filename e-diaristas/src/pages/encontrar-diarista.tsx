import Contratacao from "@partials/encontrar-diarista/_contratacao";
import VerificarProfissionais from "@partials/encontrar-diarista/_verificar-profissionais";
import type { NextPage, GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Encontrar Diarista',
    },
  };
};


const Index: NextPage = () => {
  return (
    //<VerificarProfissionais />
    <Contratacao />
    )
  }
  
  export default Index;