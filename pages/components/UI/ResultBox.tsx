import { Box, Heading } from "@kiwicom/orbit-components";
import * as React from "react";

interface IResultBoxProps {}

const ResultBox: React.FunctionComponent<IResultBoxProps> = (props) => {
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
        Enter numeric string to convert to phoneword
      </Box>
    </div>
  );
};

export default ResultBox;
