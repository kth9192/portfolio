import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DetailBtn from "./detailBtn";

function ProjectItem({ id, name, img, description, stack, url }) {
  return (
    <ProjectBox>
      <h2>{name}</h2>
      <p>{description}</p>
      <h4>- STACK</h4>
      <p>{stack}</p>
      <DetailBtn title={name} data={img} />
      <p>
        링크 -<a href={url}>{url}</a>
      </p>
    </ProjectBox>
  );
}

const ProjectBox = styled.div`
  width: 80%;
  height: fit-content;
  border-bottom: 1px solid black;
  margin: 1rem 10px;
  img {
    width: 18.75rem;
    height: 14.0625rem;
  }
`;

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string
};

export default ProjectItem;
