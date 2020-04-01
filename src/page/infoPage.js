import React, { Component } from "react";
import styled from "styled-components";
import { UserTag } from "@styled-icons/fa-solid/";
import { School } from "@styled-icons/material-rounded/";
import { Email } from "@styled-icons/evaicons-solid/";
import { Git } from "@styled-icons/boxicons-logos";

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
          <Sentence>
            <UserTag size="30" style={{ margin: "8px" }} /> <p>KIM TAE HOON</p>
          </Sentence>
          <Sentence>
            <School size="30" style={{ margin: "8px" }} />
            <p>제주대학교 컴퓨터공학전공 학사 졸업 </p>
          </Sentence>
          <Sentence>
            <Email size="30" style={{ margin: "8px" }} />
            <p> kth9193@gmail.com</p>
          </Sentence>
          <Sentence>
            <Git size="30" style={{ margin: "8px" }} />
            <p> https://github.com/kth9192</p>
          </Sentence>
        </div>
      </SectionBoxA>
    );
  }
}

const SectionBoxA = styled.section`
  display: flex;
  width: 100%;
  height: 60vh;
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

const Sentence = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default InfoPage;
