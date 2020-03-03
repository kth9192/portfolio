import React, { Component, Fragment } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import ProjectItem from "./projectItem";
import ProjectInfo from "./data";

function MenuBar() {
  const moveTo = e => {
    const target = document.querySelectorAll("." + e.target.className)[1];
    target.scrollIntoView();
  };

  return (
    <TopMenu className="menu">
      <p className="linkBox__txt">PORTPOILO</p>
      <NavGrid>
        <div className="about" onClick={e => moveTo(e)}>
          소개
        </div>
        <div className="projects" onClick={e => moveTo(e)}>
          프로젝트
        </div>
      </NavGrid>
    </TopMenu>
  );
}

const goGit = e => {
  window.location = "https://github.com/kth9192";
};

function CoverBox() {
  return (
    <Cover className="cover">
      <MenuBar></MenuBar>
      <LinkBoxContent>
        <LinkBtn onClick={goGit}>
          <img src="gitHub-Mark-32px.png" alt="github" />
          <p>GitHub로 이동하기</p>
        </LinkBtn>
      </LinkBoxContent>
    </Cover>
  );
}

function AboutSection() {
  return (
    <SectionBoxA className="about">
      <h2>About</h2>
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

function ProjectSection() {
  return (
    <SectionBoxB className="projects">
      <h2>Project</h2>
      <SectionSpacer />
      {ProjectInfo.map(project => {
        return (
          <ProjectItem
            key={project.id}
            id={project.id}
            name={project.name}
            img={project.img}
            description={project.description}
            stack={project.stack}
          />
        );
      })}
    </SectionBoxB>
  );
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <CoverBox />
        <AboutSection />
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
        height: 100vh;
        z-index:1;
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

const NavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50%;
  text-align: center;
  color: white;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 2rem;
    &:hover {
      background-color: #fff;
      color: #000;
      font-weight: bold;
      transition: 400ms ease;
      transition-property: background-color;
    }
  }
`;

const Cover = styled.section`
  display: flex;
  width: 100%;
  height: 400px;
  float: left;
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

const SectionBoxA = styled.section`
  display: flex;
  width: 100%;
  background-color: #f8f8f8;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  float: left;
  p {
    text-align: center;
  }
`;

const SectionBoxB = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  float: left;
`;
const SectionSpacer = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  width: 300px;
  border-top: 3px solid #e7e7e7;
  text-align: center;
`;

export default App;
