import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DetailBtn from "./detailBtn";
import { Web } from "@styled-icons/material/";

function ProjectItem({ name, img, description }) {
  return (
    <ProjectBox>
      <SubSubject>
        <CustomWeb size={30} style={{ marginRight: "8px" }} />
        <h3>{name}</h3>
      </SubSubject>
      <p>{description}</p>
    </ProjectBox>
  );
}

const ProjectBox = styled.div`
  width: 80%;
  height: fit-content;
  /* border-bottom: 1px solid black; */
  margin: 1rem 10px;
  img {
    width: 18.75rem;
    height: 14.0625rem;
  }

  p {
    font-size: 16px;
  }
`;

const SubSubject = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
`;

const CustomWeb = styled(Web)`
  margin-right: 8px;
`;

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string
};

export default ProjectItem;
