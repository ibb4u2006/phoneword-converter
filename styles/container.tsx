import mediaQuery from "@kiwicom/orbit-components/lib/utils/mediaQuery";
import { createGlobalStyle, css } from "styled-components";

export const ContainerStyle = createGlobalStyle`
  .container {
    margin: 3rem auto;
    width: 75%;
    position: relative;
    h1 {
        text-align: center;
    }
    h1,
    h2 {
        margin: 0.5rem 0;
    }
    > div {
        margin: 2rem 0;
    }
    ${mediaQuery.tablet(css`
      width: 50%;
    `)}
    }
`;
