import { Heading } from "@kiwicom/orbit-components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Phoneword Converter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading as="h2">Phoneword Converter</Heading>
      <footer></footer>
    </>
  );
}
