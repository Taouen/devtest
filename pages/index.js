import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout.js';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Northwest Charters</title>
        <meta name="description" content="Northwest Charters Home" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Layout></Layout>
    </>
  );
}
