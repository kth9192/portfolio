import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import styled, { css } from "styled-components";
import { Documents } from "@styled-icons/entypo";

function HeaderBar() {
  const whatContainClass = targetClass => {
    if (targetClass.includes("home")) {
      return "home";
    } else if (targetClass.includes("about")) {
      return "about";
    } else if (targetClass.includes("projects")) {
      return "projects";
    } else {
      return "home";
    }
  };

  const [activated, setActivate] = useState(
    whatContainClass(window.location.href)
  );

  const selectHandler = e => {
    const targetClass = [...e.target.classList];
    console.log("====================================");
    console.log(targetClass);
    console.log("====================================");

    setActivate(whatContainClass(targetClass));
  };

  const MenuBar = () => {
    const moveTo = e => {
      const target = document.querySelectorAll("." + e.target.className)[1];
      target.scrollIntoView();
    };

    return (
      <TopMenu className="menu">
        <NavGrid>
          <CustomLink to="/">
            <NavItem
              className="home"
              onClick={e => selectHandler(e)}
              selected={activated === "home" ? true : false}
            >
              Home
            </NavItem>
          </CustomLink>
          <CustomLink to="/about">
            <NavItem
              className="about"
              onClick={e => selectHandler(e)}
              selected={activated === "about" ? true : false}
            >
              About
            </NavItem>
          </CustomLink>
          <CustomLink to="/projects">
            <NavItem
              className="projects"
              onClick={e => selectHandler(e)}
              selected={activated === "projects" ? true : false}
            >
              Project
            </NavItem>
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
      <LinkBoxContent>
        <h1>PORTFOLIO</h1>
      </LinkBoxContent>
      <MenuBar />
      <LinkBox>
        <LinkBtn onClick={goGit}>
          <img src="gitHub-Mark-32px.png" alt="github" />
        </LinkBtn>
        {/* /TOOD:이력서로 이동 */}

        <LinkBtn onClick={goGit}>
          <CustomDocs size="30" />
        </LinkBtn>
      </LinkBox>
    </Cover>
  );
}

const Cover = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 10rem;
  float: left;
  justify-items: center;
  align-items: center;

  /* background-image: url("intro-bg.png"); */
  border: none;
  border-bottom: 1px gray solid;

  img {
    width: 100%;
    height: 100%;
  }
`;

const TopMenu = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-around;
  align-items: center;

  p {
    font-weight: bold;
    font-size: 50px;
    border-bottom: 1px solid;
  }
`;

const NavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  text-align: center;
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
  border: 2px white solid;
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
    filter: invert(0.7);
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

const LinkBoxContent = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CustomLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #fff;
`;

const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: gray;
  height: 2rem;
  background-color: #fff;

  ${props =>
    props.selected &&
    css`
      color: #000;
      font-size: 18px;
      font-weight: bold;
    `}

  &:hover {
    background-color: #000;
    color: #fff;
    font-weight: bold;
    transition: 400ms ease;
    transition-property: background-color;
  }
`;

const CustomDocs = styled(Documents)`
  cursor: pointer;
  text-decoration: none;
  color: gray;
  transition: all 0.8s ease;

  &:hover {
    color: black;
    font-weight: bold;
    filter: invert(0);
    transition: all 0.8s ease;
  }
`;

export default withRouter(HeaderBar);
