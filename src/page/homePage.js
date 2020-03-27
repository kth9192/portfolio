import React, { Component } from "react";
import styled from "styled-components";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SectionBox>
        <TitleBox>
          <h2>KIM TAE HOON</h2>
        </TitleBox>
        <TitleBoxAlt>
          <p>DEVELOPER</p>
          <p className="underline">PORTFOLIO</p>
        </TitleBoxAlt>
      </SectionBox>
    );
  }
}

const SectionBox = styled.section`
  display: flex;
  width: 100%;
  height: 90%;
  justify-content: center;
  float: left;
  h1 {
    font-size: 30px;
    text-align: center;
  }
  margin-bottom: 5rem;
`;

const TitleBox = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  background: black;
  color: #fff;
  align-items: center;

  h2 {
    font-size: 50px;
  }
`;

const TitleBoxAlt = styled.div`
  display: flex;
  align-items: flex-end;
  background: white;
  flex-direction: column;
  width: 50%;
  color: #000;
  font-size: 50px;
  padding-right: 2rem;

  .underline {
    text-decoration: underline;
  }
`;

export default HomePage;
