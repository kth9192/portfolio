import React, { Fragment, useEffect, useRef } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import Pager from "./pager";

const DetailModal = props => {
  const ref = useRef();
  useOnClick(ref, props.closeModal);

  return ReactDOM.createPortal(
    <Fragment>
      {props.isOpen ? (
        <ModalCover>
          <Modal ref={ref}>
            <Content>
              <Title>{props.title}</Title>

              <Pager></Pager>
            </Content>
            <ButtonWrap>
              <button onClick={e => props.closeModal(e)}>닫기</button>
            </ButtonWrap>
          </Modal>
        </ModalCover>
      ) : null}
    </Fragment>,
    document.getElementById("modal")
  );
};

function useOnClick(ref, handler) {
  useEffect(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        console.log("====================================");
        console.log(ref);
        console.log("====================================");
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [handler, ref]); // Empty array ensures that effect is only run on mount and unmount
}

const ModalCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.16);
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  & > * {
    &:first-child {
      margin-top: 16px;
    }
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #bebebe;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  font-size: 20px;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

const Body = styled.p`
  font-size: 14px;
`;

const ButtonWrap = styled.div`
  margin: 0;
  margin-top: 8px;
  button {
    width: 100%;
    padding: 12px 0;
    border-radius: 0 0 10px 10px;
    background-color: #ad7cef;
    font-size: 13px;
    color: white;
    border: 0;
    cursor: pointer;
    &:hover {
      background-color: #7f49c8;
    }
    &:active {
      background-color: #7e49c8;
    }
  }
`;

export default DetailModal;
