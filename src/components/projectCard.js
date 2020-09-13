import React from "react"
import styled from "styled-components"
import Media from "react-media"

const ProjectCard = ({ data }) => {
  return (
    <GridCover>
      <Media
        queries={{
          small: "(max-width: 767px)",
          medium: "(min-width: 768px) and (max-width: 1199px)",
          large: "(min-width: 1200px)",
        }}
      >
        {matches => (
          <ThumbnailCover className="content">
            <ProjectTitle>{data.name}</ProjectTitle>
            {!matches.small && <p>{data.summary}</p>}
          </ThumbnailCover>
        )}
      </Media>

      <Overlay>
        <GridTitle>{data.name}</GridTitle>
        <Milestone>자세히</Milestone>
      </Overlay>
    </GridCover>
  )
}

const GridCover = styled.div`
  display: flex;
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

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`

const ThumbnailCover = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* position: absolute; */
  justify-content: flex-start;
  flex-direction: column;
  margin: 0.5rem;
  p {
    margin: 1rem 0;
  }

  @media only screen and (min-width: 768px) {
    margin: 2rem;
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
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }

  font-weight: bold;
  margin: 1rem 0;
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

export default ProjectCard
