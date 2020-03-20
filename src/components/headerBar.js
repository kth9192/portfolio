import React from "react";
import { Link, withRouter } from "react-router-dom";

import styled, { css } from "styled-components";

function HeaderBar() {
  const MenuBar = () => {
    const moveTo = e => {
      const target = document.querySelectorAll("." + e.target.className)[1];
      target.scrollIntoView();
    };

    return (
      <TopMenu className="menu">
        <p className="linkBox__txt">PORTPOILO</p>
        <NavGrid>
          <CustomLink to="/portfolio">
            <div className="about">소개</div>
          </CustomLink>
          <CustomLink to="/projects">
            <div className="projects">프로젝트</div>
          </CustomLink>
        </NavGrid>
      </TopMenu>
    );
  };

  const goGit = e => {
    window.location = "https://github.com/kth9192";
  };

  return (
    <Cover className="cover">
      <MenuBar />
      <LinkBoxContent>
        <LinkBtn onClick={goGit}>
          <img src="gitHub-Mark-32px.png" alt="github" />
          <p>GitHub로 이동하기</p>
        </LinkBtn>
      </LinkBoxContent>
    </Cover>
  );
}

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
  height: 25rem;
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

const CustomLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #fff;
`;

export default withRouter(HeaderBar);
