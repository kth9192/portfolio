import React, { Fragment, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import Pager from './pager';
import ProjectItem from '../components/projectItem';
import { CloseOutline } from '@styled-icons/evaicons-outline';
import { Pointer } from 'styled-icons/boxicons-solid';
import { Link } from '@styled-icons/boxicons-regular';
import { Stack } from '@styled-icons/remix-fill';

const DetailModal = (props) => {
  const ref = useRef();
  useOnClick(ref, props.closeModal);

  const [idx, setidx] = useState(0);
  const [img, setImg] = useState(null);
  const [limit, setLimit] = useState('front');

  const moveFront = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (idx - 1 >= 0) {
      setidx(idx - 1);
      setLimit(null);
    } else {
      setLimit('front');
    }
  };

  const moveEnd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (idx + 1 < props.img.length) {
      setidx(idx + 1);
      setLimit(null);
    } else {
      setLimit('end');
    }
  };

  useEffect(() => {
    console.log('====================================');
    console.log('idx?', idx, props);
    console.log('====================================');
    setImg(props.img[idx]);
  }, [idx, props, props.img]);

  return ReactDOM.createPortal(
    <Fragment>
      {props.isOpen ? (
        <Background className='close' onClick={(e) => props.closeModal(e)}>
          <ModalCover>
            <Modal ref={ref}>
              <ModalHeader>
                <Title>{props.title}</Title>
                <CloseOutline
                  className='close'
                  size={30}
                  color={'#D9E0EA'}
                  style={{
                    cursor: 'pointer',
                    right: '0',
                    marginRight: '8px',
                    position: 'absolute',
                  }}
                  onClick={(e) => props.closeModal(e)}
                />
              </ModalHeader>
              <Content>
                <SubContent>
                  {/* <Sentence>{props.description}</Sentence>
                  <Sentence>{props.stack}</Sentence> */}
                  <ProjectItem
                    key={props.id}
                    id={props.id}
                    name={props.title}
                    img={props.img}
                    description={props.description}
                    stack={props.stack}
                  />

                  {/* <Pager
                    img={img}
                    moveFront={moveFront}
                    moveEnd={moveEnd}
                    title={props.title}
                    limitObj={limit}
                  /> */}

                  <ContentSlice>
                    <h4>
                      <CustomStack size='30' />
                      STACK
                    </h4>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                      }}
                    >
                      {props.stack.map((item) => {
                        let tmp = item.replace(/ /g, '_');
                        return <Chip key={item}>{`#${tmp}`}</Chip>;
                      })}
                    </div>

                    <LinkBtn
                      onClick={(e) => {
                        window.location = props.url;
                      }}
                    >
                      <CustomLink size='20' />
                      이동하기
                    </LinkBtn>
                  </ContentSlice>
                </SubContent>
              </Content>
              <ModalFooter>
                <ButtonWrap>
                  <button
                    className='close'
                    onClick={(e) => props.closeModal(e)}
                  >
                    닫기
                  </button>
                </ButtonWrap>
              </ModalFooter>
            </Modal>
          </ModalCover>
        </Background>
      ) : null}
    </Fragment>,
    document.getElementById('modal')
  );
};

function useOnClick(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        console.log('====================================');
        console.log(ref);
        console.log('====================================');
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
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
  z-index: 100;
`;

const ModalCover = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  height: 40rem;
  /* min-width: 400px;
  min-height: 300px; */
  @media (max-width: 768px) {
    width: 80%;
  }
  transform: translate(-50%, -50%);
  z-index: 1000;
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
  height: 100%;
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

const CustomStack = styled(Stack)`
  margin-right: 8px;
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

const Chip = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 8px 5px;
  border: none;
  border-radius: 15px;
  background: white;
  font-weight: bold;
  color: black;
  margin: 0 8px;
  font-size: 14px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
`;

const LinkBtn = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  background: #005ff8;
  color: white;
  cursor: pointer;
  margin: 4rem 0;
`;

const CustomLink = styled(Link)`
  margin-right: 8px;
`;
const ContentSlice = styled.div`
  width: 80%;
  margin: 4rem 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export default DetailModal;
