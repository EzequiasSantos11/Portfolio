import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../Styles/GlobalStyle/index";
import Heads from "../Components/Head";
import HeaderComponent from "../Components/Header";
import { useEffect, useState } from "react";
import dark from "../../Styles/Themes/dark";
import light from "../../Styles/Themes/light";


export default function App({ Component, pageProps }) {
  const [ theme, setTheme ] = useState(dark);
  function toggleTheme(){
    setTheme(theme.title === "dark" ? light : dark);
  }
  const [on, setOn] = useState(false);
  useEffect(()=>{
    const scrollListener = ()=>{
      if(window.scrollY > 10){
        setOn(true);
      }else{
        setOn(false);
      }
    }
    window.addEventListener('scroll',scrollListener);
    return ()=>{
      window.removeEventListener('scroll', scrollListener);
    }
  },[]);
  return (
    <>
      <Heads/>
      <ThemeProvider theme={theme}>
        <HeaderComponent scroll={on} toggleTheme={toggleTheme}/>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
