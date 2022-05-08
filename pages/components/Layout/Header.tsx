import { Heading } from "@kiwicom/orbit-components";
import * as React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return <Heading as="h1">Header Component</Heading>;
};

export default Header;
