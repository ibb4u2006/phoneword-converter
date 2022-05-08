import { Heading } from "@kiwicom/orbit-components";
import * as React from "react";
import Container from "../UI/Container";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Container>
      <Heading as="h1">Phoneword converter app</Heading>
    </Container>
  );
};

export default Header;
