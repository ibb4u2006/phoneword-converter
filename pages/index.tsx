import { Heading } from "@kiwicom/orbit-components";
import Head from "next/head";
import Container from "./components/UI/Container";
import ResultBox from "./components/UI/ResultBox";
import TextInput from "./components/UI/TextInput";

export default function Home() {
  return (
    <>
      <Head>
        <title>Phoneword Converter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <TextInput />
        <ResultBox />
      </Container>
    </>
  );
}
