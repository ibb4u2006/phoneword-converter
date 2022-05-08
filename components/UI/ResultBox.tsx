import { Box, Heading } from "@kiwicom/orbit-components";
import * as React from "react";

interface IResultBoxProps {
  result: string;
}

const ResultBox: React.FunctionComponent<IResultBoxProps> = ({ result }) => {
  return (
    <div>
      <Heading as="h2">Result</Heading>
      <Box
        background={"greenLight"}
        textAlign="center"
        color="greenDark"
        padding="large"
        borderRadius="small"
      >
        {result
          ? result
          : "Please enter the numeric string that you would like to convert to phoneword"}
      </Box>
    </div>
  );
};

export default ResultBox;
