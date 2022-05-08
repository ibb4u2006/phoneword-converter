import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,body {
  margin: 0;
  font-family: "Mulish", "sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

footer {
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1, h2, h3, h4, h5, h6, li {
  font-family: "Lora", "sans-serif";
  margin: 0;
}

h1 {
    font-size: 3rem;
    font-weight: 500;
    line-height: 57.6px;
}

h3, li {
    font-size: 22px;
    line-height: 30.8px;
}

h4 {
  font-size: 18px;
  line-height: 25.2px;
}

h5 {
  font-size: 16px;
  line-height: 22.4px;
}

p {
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
    color: inherit;
  }
}
`;

export default GlobalStyle;
