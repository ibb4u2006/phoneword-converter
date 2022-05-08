import GlobalStyles from "@/styles/global";
import { defaultTheme, ThemeProvider } from "@kiwicom/orbit-components";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  const AppComponent = Component as any;
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <GlobalStyles />
        <AppComponent {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
