import React, { useState, useEffect, Fragment } from "react";
import styled, { keyframes } from "styled-components";
import DetailModal from "./detailModal";

function DetailBtn(props) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = e => {
    e.stopPropagation();
    e.preventDefault();

    if (e.target.classList.contains("close")) {
      setModalOpen(false);
    }
  };

  return (
    <ButtonBody onClick={openModal}>
      <DetailContent>
        <p>자세히</p>
        <DetailModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          url={props.url}
          title={props.title}
          data={props.data}
        />
      </DetailContent>
    </ButtonBody>
  );
}

const ButtonBody = styled.div`
  display: flex;
  width: 100px;
  height: 50px;
  margin: 8px;

  justify-content: center;
  border: none;
  cursor: pointer;
`;

const DetailContent = styled.button`
  display: flex;
  width: 100px;
  height: 50px;
  justify-content: center;
  background-color: #ad7cef;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.4s;

  p {
    text-align: center;
  }

  :focus {
    outline: none;
  }

  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 15px 40px;
    display: inline-block;
    border-radius: 100px;
    transition: all 0.2s;
    position: absolute;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.4s;
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: "";
    display: inline-block;

    width: 100px;
    height: 50px;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  &:hover {
    &::after {
      background-color: #ad7cef;

      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }
`;

const icons = {
  margin: "0 1rem",
  cursor: "pointer"
};

export default DetailBtn;
