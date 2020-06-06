import React, { Component, useState, Fragment } from 'react';
import styled from 'styled-components';
import { projects, otherProject } from '../resource';
import DetailModal from '../components/detailModal';
import { FolderVideo } from '@styled-icons/entypo/';
import { Football } from '@styled-icons/boxicons-regular';

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnail: {
        '유튜브 클립 저장소': (
          <Fragment>
            {/* <Thumbnail></Thumbnail> */}
            <FolderVideo size='50' color='red' />
          </Fragment>
        ),
        SquardMaker: (
          <Fragment>
            {/* <Thumbnail /> */}

            <Football size='50' color='black' />
          </Fragment>
        ),
      },
    };
  }

  render() {
    const ProjectCard = (props) => {
      const [isModalOpen, setModalOpen] = useState(false);

      const openModal = () => setModalOpen(true);
      const closeModal = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (e.target.classList.contains('close')) {
          setModalOpen(false);
        }
      };

      const data = props.data;

      return (
        <GridCover onClick={openModal}>
          <ThumbnailCover>
            {this.state.thumbnail[data.name]}
            <ProjectTitle>{data.name}</ProjectTitle>
            <p>{data.summary}</p>
          </ThumbnailCover>

          <Overlay>
            <GridTitle>{data.name}</GridTitle>
            <Milestone>자세히</Milestone>
          </Overlay>
          <DetailModal
            isOpen={isModalOpen}
            closeModal={closeModal}
            title={data.name}
            img={data.img}
            description={data.description}
            url={data.url}
            stack={data.stack}
            isOther={props.isOther}
          />
        </GridCover>
      );
    };

    return (
      <SectionBoxB className='projects'>
        <h2>PROJECT</h2>
        <SectionSpacer />
        <Content>
          <ProjectContainer>
            {projects.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  data={project}
                  isOther={false}
                  // src={process.env.PUBLIC_URL + project.img[0]}
                  // alt={project.name}
                  // title={project.name}
                  // img={project.img}
                  // description={project.description}
                  // stack={project.stack}
                />
              );
            })}
          </ProjectContainer>
          <Divider>- OTHER -</Divider>
          <ProjectContainer>
            {otherProject.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  data={project}
                  src={process.env.PUBLIC_URL + project.img[0]}
                  isOther={true}
                />
              );
            })}
          </ProjectContainer>
        </Content>
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
  margin-top: 1.5rem;

  h2 {
    font-size: 30px;
    text-align: center;
  }
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
  flex-direction: column;
  padding: 8px;
`;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
`;

const GridCover = styled.div`
  width: 360px;
  height: 360px;
  position: relative;
  border: none;
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
  margin-top: 1rem;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  transform: translatey(-100px);
  transition: all 0.4s linear;
`;

const ProjectTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 1rem 0;
`;

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
`;

// const Thumbnail = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 150px;
//   height: 150px;
//   border: none;
//   border-radius: 90px;
//   position: absolute;
// `;

const ThumbnailCover = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  flex-direction: column;

  margin: 3rem;

  p {
    margin: 1rem 0;
  }
`;

const Divider = styled.p`
  margin: 4rem 0;
`;

export default ProjectsPage;
