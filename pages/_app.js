import { ThemeProvider } from "styled-components";
import GlobalStyle from "../Styles/GlobalStyle/index";
import Heads from "../Components/Head";

const theme = {
  colors: {
    primary: "#0070f3"
  }
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Heads/>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
