import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pager = props => {
  const [minColor, setMinColor] = useState("black");
  const [maxColor, setMaxColor] = useState("black");

  useEffect(() => {
    if (props.limitObj === "front") {
      setMinColor("gray");
      setMaxColor("black");
    } else if (props.limitObj === "end") {
      setMinColor("black");
      setMaxColor("gray");
    } else {
      setMinColor("black");
      setMaxColor("black");
    }
  }, [maxColor, props.limitObj]);

  return (
    <Cover>
      <Indicator id="frontIndicator" onClick={props.moveFront}>
        <IoIosArrowBack size={40} color={minColor} />
      </Indicator>
      <Body>
        <CardImg src={props.img} alt={props.title} />
      </Body>
      <Indicator id="endIndicator" onClick={props.moveEnd}>
        <IoIosArrowForward size={40} color={maxColor} />
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
