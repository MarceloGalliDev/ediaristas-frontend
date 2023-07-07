import DetalheDiaria from "@partials/diarias/_detalhe-diaria";
import  MinhasDiarias  from "@partials/diarias/_minhas-diarias";
import { DiariaProvider } from "data/contexts/DiariaContext";
import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Diárias',
    },
  };
};


const Index: NextPage = () => {
  const router = useRouter()

  if(router.query.id){
    return (
      <DiariaProvider>
        <DetalheDiaria id={router.query.id as string}/>
      </DiariaProvider>
    );
  }

  return (
    <DiariaProvider>
      <MinhasDiarias />
    </DiariaProvider>
  );
}

export default Index;