import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import styled, { css } from "styled-components";

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

  return (
    <Cover className="cover">
      <MenuBar />
    </Cover>
  );
}

const Cover = styled.section`
  display: flex;
  width: 100%;
  height: 5%;
  float: left;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  /* box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2); */
  z-index: 100;

  img {
    width: 100%;
    height: 100%;
  }
`;

const TopMenu = styled.div`
  display: flex;
  width: 30%;
  height: fit-content;
  justify-content: space-around;
  align-items: center;
  margin-right: 16px;

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
      border-bottom: 1.5px black solid;
    `}

  &:hover {
    background-color: #000;
    color: #fff;
    font-weight: bold;
    transition: 400ms ease;
    transition-property: background-color;
  }
`;

export default withRouter(HeaderBar);
