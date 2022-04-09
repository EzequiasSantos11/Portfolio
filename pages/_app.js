import { ThemeProvider } from "styled-components";
import GlobalStyle from "../Styles/GlobalStyle/index";
import {Heads} from "../Components/Head";

const theme = {
  colors: {
    primary: "#0070f3"
  }
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Heads/>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
