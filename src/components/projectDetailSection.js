import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { GetImage } from "../query/imageQuery"

const ProjectDetailItem = ({ name, img, summary, stack, url }) => {
  console.log(name, img, summary, stack, url)
  return (
    <ProjectItemCover>
      <GetImage width={200} height={200} />
      <span>
        <h3>{name}</h3>
        <p>{summary}</p>
        <p>{url}</p>
      </span>
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
            stack
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
`

export default ProjectDetailSection
