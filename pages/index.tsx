import { createToast } from "@kiwicom/orbit-components";
import Head from "next/head";
import * as React from "react";
import { postNumericInput } from "utils/api";
import Container from "../components/UI/Container";
import Keypad from "../components/UI/Keypad";
import ResultBox from "../components/UI/ResultBox";
import TextInput from "../components/UI/TextInput";

const endpoint = "/api/phoneword";

interface IWordState {
  result: string;
}

const Home: React.FunctionComponent = () => {
  const [word, setWord] = React.useState<IWordState>({ result: "" });
  const [inputValue, setInputValue] = React.useState<string[]>([]);

  const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value.toString().split(""));
  };

  const clickHandler = async (input: string) => {
    switch (input) {
      case "*":
        createToast("* is not a valid numeric input");
        setInputValue([...inputValue]);
        break;
      case "0":
        createToast("0 does not have phoneword");
        setInputValue([...inputValue]);
        break;
      case "#":
        createToast("# is not a valid numeric input");
        setInputValue([...inputValue]);
        break;
      case "1":
        inputValue.splice(-1);
        setInputValue([...inputValue]);
        break;
      default:
        setInputValue([...inputValue, input]);
        break;
    }
  };

  React.useEffect(() => {
    (async () => {
      if (inputValue.length < 9) {
        const postResponse = await postNumericInput(
          endpoint,
          inputValue.join("")
        );
        setWord(postResponse);
      } else {
        setWord({
          result:
            "Oops! This request cannot be handled because of large response size! API Routes are meant to respond quickly and are not intended to support responding with large amounts of data. Please reduce the length of your entry.",
        });
      }
    })();
  }, [inputValue]);

  return (
    <>
      <Head>
        <title>Phoneword Converter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <TextInput input={inputValue.join("")} handleChange={changeHandler} />
        <ResultBox result={word.result} />
        <Keypad handleClick={clickHandler} />
      </Container>
    </>
  );
};

export default Home;
