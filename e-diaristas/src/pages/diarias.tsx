import MinhasDiarias from "@partials/diarias/_minhas-diarias";
import { DiariaProvider } from "data/contexts/DiariaContext";
import type { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Diárias',
    },
  };
};

const Index: NextPage = () => {
  return (
    <DiariaProvider>
      <MinhasDiarias />
    </DiariaProvider>
  );
}

export default Index;