import type { NextPage } from "next";
import Presentation from '@partials/index/_presentation';
import Advantages from '@partials/index/_advantages';

const Index: NextPage = () => {
  return (
    <div>
      <Presentation />
      <Advantages/>
    </div>
  )
}

export default Index;