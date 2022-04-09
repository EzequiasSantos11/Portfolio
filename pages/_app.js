import { ThemeProvider } from "styled-components";
import GlobalStyle from "../Styles/GlobalStyle/index";

const theme = {
  colors: {
    primary: "#0070f3"
  }
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
