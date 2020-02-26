import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DetailBtn from "./detailBtn";

function ProjectItem({ name, img, description }) {
  return (
    <ProjectBox>
      <p>{name}</p>
      <DetailBtn title={name}>자세히</DetailBtn>
      {/* <img src={img} alt={name} /> */}
      <p>{description}</p>
    </ProjectBox>
  );
}

const ProjectBox = styled.div`
  width: 80%;
  height: fit-content;
  border-bottom: 1px solid black;

  img {
    width: 18.75rem;
    height: 14.0625rem;
  }
`;

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default ProjectItem;
