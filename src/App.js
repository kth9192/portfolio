import React, { Component, Fragment } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import ProjectItem from "./ProjectItem";
import ProjectInfo from "./Data";

function MenuBar() {
  return (
    <TopMenu className="menu">
      <p className="linkBox__txt">PORTPOILO</p>
      <MyGrid>
        <div>홈으로</div>
        <div>소개</div>
        <div>프로젝트</div>
      </MyGrid>
    </TopMenu>
  );
}

const goGit = e => {
  window.location = "https://github.com/kth9192";
};

function CoverBox() {
  return (
    <Fragment>
      <Cover className="cover">
        <MenuBar></MenuBar>
        <LinkBoxContent>
          <LinkBtn onClick={goGit}>
            <img src="gitHub-Mark-32px.png" alt="github" />
            <p>GitHub로 이동하기</p>
          </LinkBtn>
        </LinkBoxContent>
      </Cover>
    </Fragment>
  );
}

function ProjectSection() {
  return (
    <SectionBox className="projectSection">
      {ProjectInfo.map(project => (
        <ProjectItem
          key={project.id}
          id={project.id}
          name={project.name}
          img={project.img}
          description={project.description}
        />
      ))}
    </SectionBox>
  );
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <CoverBox />
        <ProjectSection />
      </Fragment>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  @font-face {
       font-family: "NanumBarunGothic";
       src: url('font/NanumBarunGothic.ttf') format('truetype');
     }
    body {
        padding: 0;
        margin: 0;
        font-family:나눔고딕, NanumBarunGothic, ng;
    }
`;

const TopMenu = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    color: white;
    font-weight: bold;
    font-size: 50px;
    border-bottom: 1px solid;
  }
`;

const MyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50%;
  text-align: center;
  color: white;
`;

const Cover = styled.section`
  display: flex;
  width: 100%;
  height: 50vh;
  flex-direction: column;
  align-items: center;
  background-image: url("intro-bg.png");

  img {
    width: 100%;
    height: 100%;
  }
`;

const LinkBtn = styled.button`
  display: flex;
  width: 80%;
  height: fit-content;
  border: 2px white solid;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: white;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;

  &:hover {
    color: black;
    background-color: white;
    border: 1px black solid;
    font-weight: bold;
    img {
      filter: invert(0);
    }
    p {
      text-decoration: underline;
    }
  }

  img {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: 4px;
    filter: invert(1);
  }
`;

const LinkBoxContent = styled.div`
  display: flex;
  width: 40%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .linkBox__txt {
    color: white;
    font-size: 50px;
    font-weight: bold;
  }
`;

const SectionBox = styled.section`
  display: flex;
  width: 100%;
  height: 500px;
  justify-content: center;
  flex-direction: column;
`;

export default App;
