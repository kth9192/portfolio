import React, { Component, Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Routes />
      </Fragment>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  @font-face {
       font-family: "NanumBarunGothic";
       src: url('font/NanumBarunGothic.ttf') format('truetype');
     }
 
    html,body,#root {
        padding: 0;
        margin: 0;
        height:100%;
        z-index:1;
        font-family:나눔고딕, NanumBarunGothic, ng;
    }

`;

export default App;
