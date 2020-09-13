import React from "react"
import styled from "styled-components"
import { Web } from "@styled-icons/material/"
import ProjectCard from "./projectCard"
import { projects } from "../resource"

function ProjectSection() {
  return (
    <Cover>
      <GridContainer>
        {projects.map(project => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </GridContainer>
    </Cover>
  )
}

const Cover = styled.section`
  display: flex;
  height: 40%;
  justify-content: center;
  float: left;
  margin-top: 1.5rem;

  h2 {
    font-size: 30px;
    text-align: center;
  }
`

const GridContainer = styled.span`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 50%);
  grid-auto-columns: minmax(auto, 20%);
  margin: 0.5rem;
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
