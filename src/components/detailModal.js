import React, { Fragment, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import Pager from "./pager";
import { DotSingle } from "@styled-icons/entypo";
import { CloseOutline } from "@styled-icons/evaicons-outline";
import { Pointer } from "styled-icons/boxicons-solid";

const DetailModal = props => {
  const ref = useRef();
  useOnClick(ref, props.closeModal);

  const [idx, setidx] = useState(0);
  const [img, setImg] = useState(props.img[0]);
  const [limit, setLimit] = useState("front");

  const moveFront = e => {
    e.stopPropagation();
    e.preventDefault();
    if (idx - 1 >= 0) {
      setidx(idx - 1);
      setLimit(null);
    } else {
      setLimit("front");
    }
  };

  const moveEnd = e => {
    e.stopPropagation();
    e.preventDefault();
    if (idx + 1 < props.img.length) {
      setidx(idx + 1);
      setLimit(null);
    } else {
      setLimit("end");
    }
  };

  useEffect(() => {
    console.log("====================================");
    console.log("idx?", idx);
    console.log("====================================");

    setImg(props.img[idx]);
  }, [idx, props.img]);

  return ReactDOM.createPortal(
    <Fragment>
      {props.isOpen ? (
        <Background className="close" onClick={e => props.closeModal(e)}>
          <ModalCover>
            <Modal ref={ref}>
              <ModalHeader>
                <Title>{props.title}</Title>
                <CloseOutline
                  size={30}
                  color={"#D9E0EA"}
                  style={{
                    cursor: "pointer",
                    right: "0",
                    marginRight: "8px",
                    position: "absolute"
                  }}
                  onClick={e => props.closeModal(e)}
                />
              </ModalHeader>
              <Content>
                <SubTitle>
                  <DotSingle size={40} color={"#5968E2"} />
                  설명
                </SubTitle>

                <SubContent>
                  <Sentence>{props.description}</Sentence>
                  <Sentence>{props.stack}</Sentence>
                  {/* <Pager
                    img={img}
                    moveFront={moveFront}
                    moveEnd={moveEnd}
                    title={props.title}
                    limitObj={limit}
                  /> */}
                  <LinkBtn onClick={console.log(props.url)}>이동하기</LinkBtn>
                </SubContent>
              </Content>
              <ModalFooter>
                <ButtonWrap>
                  <button className="close" onClick={e => props.closeModal(e)}>
                    닫기
                  </button>
                </ButtonWrap>
              </ModalFooter>
            </Modal>
          </ModalCover>
        </Background>
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

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0px auto;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
`;

const ModalCover = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 60rem;
  height: 40rem;
  /* min-width: 400px;
  min-height: 300px; */
  transform: translate(-50%, -50%);
`;

const Modal = styled.div`
  position: flex;
  width: 100%;
  height: 100%;
  padding: 0;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  /* & > * {
    &:first-child {
      margin-top: 16px;
    }
    margin-left: 16px;
    margin-right: 16px;
  } */
`;

const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #bebebe;
  height: 10%;
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  flex-direction: column;
  width: 100%;
  height: 80%;
  margin: 0;
`;

const SubContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  font-weight: bold;
  color: #333;
  text-align: center;
  font-size: 22px;
`;

const SubTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
`;

const ModalFooter = styled.div`
  width: 100%;
  height: fit-content;
  position: absolute;
  bottom: 0;
  margin: 0;
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

const Sentence = styled.p`
  color: gray;
  font-size: 16px;
`;

const LinkBtn = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  background: #005ff8;
  color: white;
  cursor: pointer;
`;

export default DetailModal;
