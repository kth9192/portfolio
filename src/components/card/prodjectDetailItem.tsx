import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { GetImage } from "../../query/imageQuery"
import { ImgUrl } from "../../shared/enum/imgUrls"

const ProjectDetailItem = ({
  name,
  type,
  img,
  summary,
  stacks,
  url,
  description,
}) => {
  console.log(type, name, img, description, summary, stacks, url)
  console.log("====================================")
  console.log(type === "mobile")
  console.log("====================================")

  useEffect(() => {
    console.log("====================================")
    console.log("img", ImgUrl["create react app"], img)
    console.log("====================================")
  }, [])

  return (
    <ProjectItemCover>
      {/* <ImgCover isMobile={type === "mobile"}>
        <GetImage title={img} />
      </ImgCover> */}

      <InfoCover>
        <Name>{name}</Name>
        {description.map(str => (
          <p key={str}>{str}</p>
        ))}
        <StackContainer>
          {stacks.map((stack, idx) => (
            <Chip key={`${stack}${idx}`}>
              <p>{`#${stack}`}</p>
              <GetImage title={ImgUrl[`${stack}`]} />
            </Chip>
          ))}
        </StackContainer>

        <LinkUrl href={url}>{`${url}`}</LinkUrl>
      </InfoCover>
    </ProjectItemCover>
  )
}

const ProjectItemCover = styled.div`
  display: inline-block;
  height: 100%;
  align-items: center;
  flex-direction: column;
  text-align: start;
  margin: 1rem 0;
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    /* justify-content: space-between; */
    position: relative;
  }

  .gatsby-image-wrapper {
    width: 70%;
    height: auto;
    margin: 1rem;
    position: relative;
  }
`

const ImgCover = styled.div<{ isMobile: boolean }>`
  display: flex;

  @media only screen and (min-width: 768px) {
    width: ${props => (props.isMobile ? "100%" : "100%")};
  }
`

const InfoCover = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  p {
    width: fit-content;
  }

  @media only screen and (min-width: 768px) {
    height: 100%;
    /* align-items: flex-end; */
  }
`

const StackContainer = styled.span`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  margin: 1rem 0;
  justify-items: center;
  align-items: center;

  p {
    text-align: center;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(8, 1fr);
  }
`

const Chip = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8px 5px;
  border: none;
  border-radius: 15px;
  background: white;
  font-weight: bold;
  color: black;
  margin: 0.2rem 0.5rem;
  font-size: 14px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
`

const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;

  @media only screen and (min-width: 768px) {
    font-size: 30px;
  }
`

const LinkUrl = styled.a`
  bottom: 0;
  margin: 0 1rem;
  text-align: center;

  &:link,
  &:visited,
  &:active {
    color: black;
  }

  @media only screen and (min-width: 768px) {
    font-size: 20px;
    position: absolute;
    text-align: start;

    bottom: 0;
    margin: 0 1rem;
  }
`

export default ProjectDetailItem
