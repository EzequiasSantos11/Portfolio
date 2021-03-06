import "styled-components";

declare module 'styled-components'{
  export interface DefaultTheme{
    title: string,
    colors:{
      primary: string,
      secondary: string,
      terciary: string,
      textColor: string,
      titleColor: string,
      background: string,
      linear: string
    }
  }
}