import Head from 'next/head'
import Image from 'next/image'
import type { NextPage, GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: ""
    }
  };
};

const Index: NextPage = () => {
  return <div>teste</div>
}

export default Index;