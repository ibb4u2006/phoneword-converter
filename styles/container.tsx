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
    .keypad-section {
        position: fixed;
        bottom: 0;
        width: inherit;
        background-color: #ffffff;
        z-index: 1;
        margin-bottom: 0;
    }
    .keypad button {
        background-color: #2b7336;
        padding: 2.5rem 0.5rem;
        border: 1px solid #2b7336;
        h3,
        p {
        color: rgb(235, 244, 236);
        text-align: center;
        }
        p {
        margin-bottom: 5px;
        }
        :hover {
        background-color: rgb(235, 244, 236);
        h3,
        p {
            color: #2b7336;
        }
        }
    }
    ${mediaQuery.tablet(css`
      width: 50%;
    `)}
    }
`;
