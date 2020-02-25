import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function ProjectItem({ name, img, description }) {
  return (
    <ProjectBox>
      <p>{name}</p>
      <img src={img} alt={name} />
      <p>{description}</p>
    </ProjectBox>
  );
}

const ProjectBox = styled.div`
  width: 80%;
  height: fit-content;
  border-bottom: 1px solid black;
`;

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default ProjectItem;
