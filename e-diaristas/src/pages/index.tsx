import Presentation from '@partials/index/_presentation';
import Advantages from '@partials/index/_advantages';
import FrequentQuestion from "@partials/index/_frequent-question";
import type { GetStaticProps, NextPage } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: '',
    },
  };
};

const Index: NextPage<{ title: string }> = (props) => {
  return (
    <div>
      <Presentation />
      <Advantages />
      <FrequentQuestion />
    </div>
  );
};

export default Index;
