import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DetailBtn from "./detailBtn";
import { Web } from "@styled-icons/material/";
import { Stack } from "@styled-icons/remix-fill";
import { Link } from "@styled-icons/boxicons-regular";

function ProjectItem({ name, img, description, stack, url }) {
  return (
    <ProjectBox>
      <SubTitle>
        <CustomWeb size={30} style={{ marginRight: "8px" }} />
        <h2>{name}</h2>
      </SubTitle>

      <p>{description}</p>

      <SubTitle>
        <CustomStack size={30} style={{ marginRight: "8px" }} />
        <h4> STACK</h4>
      </SubTitle>

      <p>{stack}</p>
      <DetailBtn title={name} data={img} />
      <SubTitle>
        <CustomLink size="30" />
        <p>
          링크 -<a href={url}>{url}</a>
        </p>
      </SubTitle>
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

const SubTitle = styled.div`
  display: flex;
  align-items: center;
`;

const CustomWeb = styled(Web)`
  margin-right: 8px;
`;

const CustomStack = styled(Stack)`
  margin-right: 8px;
`;

const CustomLink = styled(Link)`
  margin-right: 8px;
`;

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string
};

export default ProjectItem;
