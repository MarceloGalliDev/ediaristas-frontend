import Head from 'next/head'
import Image from 'next/image'
import type { NextPage, GetStaticProps } from "next";
import Presentation from '@partials/index/_presentation';

const Index: NextPage = () => {
  return (
    <div>
      <Presentation />
    </div>
  )
}

export default Index;