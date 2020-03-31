import React, { Component } from "react";
import styled from "styled-components";
import { Documents } from "@styled-icons/entypo";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goGit = e => {
    window.location = "https://github.com/kth9192";
  };

  render() {
    return (
      <SectionBox>
        <TitleBox>
          <h2>KIM TAE HOON</h2>
          <h3>Developer Portfolio</h3>
          <LinkBox>
            <LinkBtn onClick={this.goGit}>
              <img src="gitHub-Mark-32px.png" alt="github" />
            </LinkBtn>
            {/* /TOOD:이력서로 이동 */}

            <LinkBtn onClick={this.goGit}>
              <CustomDocs size="30" />
            </LinkBtn>
          </LinkBox>
        </TitleBox>
      </SectionBox>
    );
  }
}

const SectionBox = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  float: left;

  h1 {
    font-size: 30px;
    text-align: center;
  }
  margin-bottom: 5rem;
`;

const TitleBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  color: #fff;
  align-items: center;
  flex-direction: column;
  background: url("./cover.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  z-index: 2;

  h2 {
    font-size: 50px;
  }

  :after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 100px;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 50%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;

const LinkBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkBtn = styled.button`
  display: flex;
  width: 4rem;
  height: fit-content;
  border: none;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  font-size: 16px;
  cursor: pointer;
  text-decoration: none;

  img {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: 4px;
    filter: invert(1);
    transition: all 0.8s ease;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    color: black;
    background-color: white;
    font-weight: bold;

    img {
      filter: invert(0);
      transition: all 0.8s ease;
    }
    p {
      text-decoration: underline;
    }
  }
`;

const CustomDocs = styled(Documents)`
  cursor: pointer;
  text-decoration: none;
  color: white;
  transition: all 0.8s ease;

  &:hover {
    color: black;
    font-weight: bold;
    filter: invert(0);
    transition: all 0.8s ease;
  }
`;
export default HomePage;
