import MinhasDiarias from "@partials/diarias/_minhas-diarias";
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
    <div>
      <MinhasDiarias />
    </div>
  )
}

export default Index;