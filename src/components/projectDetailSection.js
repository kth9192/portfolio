import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { GetImage } from "../query/imageQuery"

const ProjectDetailItem = ({
  name,
  img,
  summary,
  stacks,
  url,
  description,
}) => {
  console.log(name, img, description, summary, stacks, url)
  return (
    <ProjectItemCover>
      <GetImage title={img} />
      <InfoCover>
        <Name>{name}</Name>
        {description.map(str => (
          <p key={str}>{str}</p>
        ))}
        <StackContainer>
          {stacks.map((stack, idx) => (
            <Chip key={`#${stack}${idx}`}>
              <p>{stack}</p>
            </Chip>
          ))}
        </StackContainer>

        <LinkUrl href={url}>{`링크 : ${url}`}</LinkUrl>
      </InfoCover>
    </ProjectItemCover>
  )
}

function ProjectDetailSection() {
  const data = useStaticQuery(graphql`
    query {
      allProjectInfosJson {
        edges {
          node {
            name
            stacks
            summary
            url
            img
            id
            description
          }
        }
      }
    }
  `)

  return (
    <Cover>
      <SectionSpacer />
      {data &&
        data.allProjectInfosJson.edges.map(project => {
          return <ProjectDetailItem key={project.node.id} {...project.node} />
        })}
    </Cover>
  )
}

const Cover = styled.section`
  display: flex;
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  float: left;
  text-align: center;
  margin-top: 1.5rem;

  h1 {
    font-size: 30px;
    text-align: center;
  }
`
const SectionSpacer = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  width: 100%;
  border-top: 3px solid #e7e7e7;
  text-align: center;
`

const ProjectItemCover = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  text-align: start;
  margin: 1rem 0;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    height: 30vh;
    justify-content: space-between;
    position: relative;
  }

  .gatsby-image-wrapper {
    width: 80%;
    height: auto;
    margin: 1rem;

    @media only screen and (min-width: 768px) {
      width: 50%;
      height: auto;
    }
  }
`
const InfoCover = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    width: 50%;
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
    width: 80%;
    grid-template-columns: repeat(5, 1fr);
  }
`

const Chip = styled.div`
  width: fit-content;
  height: fit-content;
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
  margin: 1rem;

  @media only screen and (min-width: 768px) {
    font-size: 30px;
    text-align: end;
  }
`

const LinkUrl = styled.a`
  bottom: 0;
  margin: 0 1rem;

  &:link,
  &:visited,
  &:active {
    color: black;
  }

  @media only screen and (min-width: 768px) {
    font-size: 20px;
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 0 1rem;
  }
`

export default ProjectDetailSection
