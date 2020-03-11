import React, { Component } from "react";
import styled from "styled-components";
import ProjectInfo from "../data";
import ProjectItem from "../components/projectItem";

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SectionBoxB className="projects">
        <h1>Project</h1>
        <SectionSpacer />
        {ProjectInfo.map(project => {
          return (
            <ProjectItem
              key={project.id}
              id={project.id}
              name={project.name}
              img={project.img}
              description={project.description}
              stack={project.stack}
              url={project.url}
            />
          );
        })}
      </SectionBoxB>
    );
  }
}

const SectionBoxB = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  float: left;
  h1 {
    font-size: 30px;
    text-align: center;
  }
  margin-bottom: 5rem;
`;

const SectionSpacer = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  width: 300px;
  border-top: 3px solid #e7e7e7;
  text-align: center;
`;

export default ProjectsPage;
