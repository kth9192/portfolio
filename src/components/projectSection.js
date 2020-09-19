import React from "react"
import styled from "styled-components"
import { Web } from "@styled-icons/material/"
import { useStaticQuery, graphql } from "gatsby"
import ProjectCard from "./projectCard"

function ProjectSection() {
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
      <h1>Projects</h1>
      <SectionSpacer />
      <GridContainer>
        {data.allProjectInfosJson.edges.map(project => {
          console.log("project", project)
          return <ProjectCard key={project.node.id} {...project.node} />
        })}
      </GridContainer>
    </Cover>
  )
}

const Cover = styled.section`
  display: flex;
  height: 40%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  float: left;
  margin-top: 1.5rem;
  h1 {
    font-size: 30px;
    text-align: center;
  }
  h2 {
    font-size: 30px;
    text-align: center;
  }
`
const SectionSpacer = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  width: 50%;
  border-top: 3px solid #e7e7e7;
  text-align: center;
`

const GridContainer = styled.span`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-columns: minmax(auto, 20%);
  justify-items: center;
  grid-gap: 0.5rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(5, 20%);
  }
`

const ProjectBox = styled.div`
  display: ${props => (props.isOther ? "none" : "flex")};
  width: 80%;
  height: fit-content;
  flex-direction: column;
  margin: 1rem 10px;
  img {
    width: 18.75rem;
    height: 14.0625rem;
  }
  p {
    font-size: 16px;
  }
`

const SubSubject = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
`

const CustomWeb = styled(Web)`
  margin-right: 8px;
`

// ProjectItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   img: PropTypes.arrayOf(PropTypes.string).isRequired,
//   description: PropTypes.string,
// }

export default ProjectSection
