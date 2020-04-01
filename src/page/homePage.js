import React, { Component } from "react";
import styled from "styled-components";
import { Documents } from "@styled-icons/entypo";
import { Github } from "@styled-icons/boxicons-logos/";

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
          <Title>
            <h2>KIM TAE HOON</h2>
          </Title>
          <h3>Developer Portfolio</h3>
          <LinkBox>
            <LinkBtn onClick={this.goGit}>
              {/* <img src="gitHub-Mark-32px.png" alt="github" />
               */}
              <CustomGit size="50" />
            </LinkBtn>
            {/* /TOOD:이력서로 이동 */}

            <LinkBtn
              onClick={e => {
                window.location.href = "./assets/resume.pdf";
              }}
            >
              <CustomDocs size="50" />
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

const Title = styled.div`
  width: fit-content;

  border-bottom: 2px white solid;
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
    background-color: white;
    font-weight: bold;

    svg {
      color: black;
      filter: invert(0);
      font-weight: bold;
      transition: all 0.8s ease;
    }
    p {
      text-decoration: underline;
    }
  }
`;

const CustomGit = styled(Github)`
  cursor: pointer;
  text-decoration: none;
  color: white;
  transition: all 0.8s ease;
`;

const CustomDocs = styled(Documents)`
  cursor: pointer;
  text-decoration: none;
  color: white;
  transition: all 0.8s ease;
`;

export default HomePage;
