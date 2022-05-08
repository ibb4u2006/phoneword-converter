import { ContainerStyle } from "styles/container";
import { Box } from "@kiwicom/orbit-components";
import * as React from "react";

interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = ({ children }) => {
  return (
    <>
      <ContainerStyle />
      <Box className="container">{children}</Box>
    </>
  );
};

export default Container;
