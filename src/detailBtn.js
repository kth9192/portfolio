import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DetailModal from "./detailModal";

function DetailBtn(props) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = e => {
    e.stopPropagation();
    setModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.addEventListener("click", e => {
        console.log("====================================");
        console.log(e.target.id);
        console.log("====================================");
        if (
          e.target.id !== "frontIndicator" &&
          e.target.id !== "endIndicator"
        ) {
          setModalOpen(false);
        }
      });
    }
  }, [isModalOpen]);

  return (
    <ButtonBody onClick={openModal}>
      자세히
      <DetailModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        url={props.url}
        title={props.title}
      />
    </ButtonBody>
  );
}

const ButtonBody = styled.button`
  display: flex;
  align-items: center;
  width: 100px;
  height: 50px;
`;

const icons = {
  margin: "0 1rem",
  cursor: "pointer"
};

export default DetailBtn;
