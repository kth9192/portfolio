import React, { Component, useState } from "react";
import styled from "styled-components";
import { projects } from "../resource";
import ProjectItem from "../components/projectItem";
import DetailModal from "../components/detailModal";

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const ProjectOverlayItem = props => {
      const [isModalOpen, setModalOpen] = useState(false);

      const openModal = () => setModalOpen(true);
      const closeModal = e => {
        e.stopPropagation();
        e.preventDefault();

        if (e.target.classList.contains("close")) {
          setModalOpen(false);
        }
      };

      console.log("====================================");
      console.log("test", props.img);
      console.log("====================================");

      return (
        <GridCover onClick={openModal}>
          <GridImg
            src={props.src}
            alt={props.alt}
            onClick={this.handleProjectModal}
          />
          <Overlay>
            <GridTitle>{props.title}</GridTitle>
            <Milestone>자세히</Milestone>
          </Overlay>
          <DetailModal
            isOpen={isModalOpen}
            closeModal={closeModal}
            title={props.title}
            img={props.img}
            description={props.description}
            url={props.url}
            stack={props.stack}
          />
        </GridCover>
      );
    };

    return (
      <SectionBoxB className="projects">
        <h2>PROJECT</h2>
        <SectionSpacer />
        <Content>
          <ProjectContainer>
            {projects.map(project => {
              return (
                <ProjectOverlayItem
                  key={project.id}
                  src={process.env.PUBLIC_URL + project.img[0]}
                  alt={project.name}
                  title={project.name}
                  img={project.img}
                  description={project.description}
                  stack={project.stack}
                />
              );
            })}
          </ProjectContainer>
        </Content>
      </SectionBoxB>
    );
  }
}

{
  /* <ProjectItem
                key={project.id}
                id={project.id}
                name={project.name}
                img={project.img}
                description={project.description}
                stack={project.stack}
                url={project.url}
              /> */
}

const SectionBoxB = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  float: left;
  h2 {
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

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const ProjectContainer = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto;
  grid-gap: 1rem;
`;

const GridCover = styled.div`
  width: 360px;
  height: 360px;
  position: relative;
  border: none;
  border-radius: 10px;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);

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
`;

const Overlay = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  position: absolute;
  filter: alpha(opacity=0);
  transition: all 0.4s ease-in-out;
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
`;

const GridImg = styled.img`
  object-fit: fill;
  max-width: 360px;
  max-height: 580px;
  cursor: pointer;
  transition: all 0.4s linear;
`;

const GridTitle = styled.p`
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  transform: translatey(-100px);
  transition: all 0.4s linear;
`;

const Milestone = styled.div`
  display: flex;
  width: 100px;
  height: 48px;
  margin-top: 20px;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border: 1px white solid;
  transition: all 0.4s linear;
`;

export default ProjectsPage;
