import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pager = props => {
  return (
    <Cover>
      <Indicator id="frontIndicator" onClick={props.moveFront}>
        <IoIosArrowBack size={40} />
      </Indicator>
      <Body>
        <CardImg src={props.img} alt={props.title} />
      </Body>
      <Indicator id="endIndicator" onClick={props.moveEnd}>
        <IoIosArrowForward size={40} />
      </Indicator>
    </Cover>
  );
};

const Cover = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  flex-direction: flex;
`;

const Body = styled.div`
  bottom: 0;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Indicator = styled.button`
  width: 50px;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
`;

export default Pager;
