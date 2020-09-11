import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
export const GlobalStyle = createGlobalStyle`
  ${reset}

  html,body{
    height:100vh;
  }
`
