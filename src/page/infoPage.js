import React, { Component } from "react";
import styled from "styled-components";

class InfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SectionBoxA className="about">
        <h1>About</h1>
        <SectionSpacer />
        <div>
          <p>KIM TAE HOON</p>
          <p>제주대학교 컴퓨터공학전공 학사 졸업 </p>
          <p>Email : kth9193@gmail.com</p>
          <p>Github : https://github.com/kth9192</p>
        </div>
      </SectionBoxA>
    );
  }
}

const SectionBoxA = styled.section`
  display: flex;
  width: 100%;
  height: 60vh;
  background-color: #f8f8f8;
  align-items: center;
  flex-direction: column;
  float: left;
  text-align: center;
  margin-top: 10px;
  h1 {
    font-size: 30px;
    text-align: center;
  }
`;

const SectionSpacer = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  width: 300px;
  border-top: 3px solid #e7e7e7;
  text-align: center;
`;

export default InfoPage;
