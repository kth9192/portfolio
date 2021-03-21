import React, { useEffect } from "react"
import styled from "styled-components"
import { ProjectDatas } from "../../hooks/allProject"
import { MobileProjectDatas } from "../../hooks/allMobileProject"
import ProjectDetailItem from "./prodjectDetailItem"

function ProjectDetailSection() {
  const projects = ProjectDatas()
  const mobileProjects = MobileProjectDatas()

  return (
    <Cover>
      <SectionSpacer />
      {projects &&
        projects.map(project => {
          return <ProjectDetailItem key={project.node.id} {...project.node} />
        })}
      {mobileProjects &&
        mobileProjects.map(project => (
          <ProjectDetailItem key={project.node.id} {...project.node} />
        ))}
    </Cover>
  )
}

const Cover = styled.section`
  display: grid;
  padding: 2rem;
  grid-template-rows: 2%;
  grid-auto-rows: 0.5fr;
  box-sizing: border-box;
  border-radius: 15px;
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

export default ProjectDetailSection
