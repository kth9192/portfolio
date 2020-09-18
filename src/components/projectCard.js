import React, { useState } from "react"
import styled from "styled-components"
import Media from "react-media"
import ProjectInfoModal from "./projectInfoModal"
import { Football, LogoYoutube } from "@styled-icons/ionicons-solid/"
import { Cut } from "@styled-icons/ionicons-sharp/"

const ProjectCard = data => {
  console.log("info", data)
  return (
    <GridItemCover>
      <GridItemContainer>
        <Media
          queries={{
            small: "(max-width: 767px)",
            medium: "(min-width: 768px) and (max-width: 1199px)",
            large: "(min-width: 1200px)",
          }}
        >
          {matches => (
            <ThumbnailCover className="content">
              <span>
                {data.name === "SquardMaker" ? (
                  <Football size="24" />
                ) : (
                  <LogoYoutube size="24" color={"red"} />
                )}
                <ProjectTitle>{data.name}</ProjectTitle>
              </span>

              {!matches.small && <p>{data.summary}</p>}
            </ThumbnailCover>
          )}
        </Media>
        <LinkBtn>바로가기</LinkBtn>
      </GridItemContainer>

      {/* 
      <Overlay>
        <GridTitle>{data.name}</GridTitle>
        <Milestone>자세히</Milestone>
      </Overlay> */}
    </GridItemCover>
  )
}

const GridItemCover = styled.div`
  display: flex;
  border: none;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  &:hover {
    img {
      transform: scale(1.2);
    }
    p {
      opacity: 1;
      filter: alpha(opacity=100);
      transform: translatey(0);
    }
  }

  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem;
  }

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`

const GridItemContainer = styled.span`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: space-between;
`

const ThumbnailCover = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  font-size: 1.25rem;

  p {
    margin: 1rem 0;
  }

  @media only screen and (min-width: 768px) {
    align-items: flex-start;
    justify-content: space-between;
  }
`

const Overlay = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  position: absolute;
  filter: alpha(opacity=0);
  transition: all 0.3s ease-in-out;
  opacity: 0;
  top: 0;
  left: 0;
  position: absolute;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  &:hover {
    opacity: 1;
    filter: alpha(opacity=100);
  }
`

const GridImg = styled.img`
  object-fit: fill;
  max-width: 360px;
  max-height: 580px;
  cursor: pointer;
  transition: all 0.4s linear;
`

const GridTitle = styled.p`
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  margin-top: 1rem;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  transform: translatey(-100px);
  transition: all 0.4s linear;
`

const ProjectTitle = styled.p`
  font-size: 16px;
  font-weight: bold;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    width: 100%;
    margin: 1rem 0;
    font-weight: bold;
  }
`

const Milestone = styled.div`
  display: flex;
  width: 100px;
  height: 48px;
  margin-top: 4rem;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border: 1px white solid;
  transition: all 0.4s linear;
`

const LinkBtn = styled.button`
  width: 100px;
  height: 50px;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  background-color: #8c38e5;
`

export default ProjectCard
