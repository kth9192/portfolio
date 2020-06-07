import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { LeftArrow, RightArrow } from '@styled-icons/boxicons-solid/';

const Pager = (props) => {
  const [minColor, setMinColor] = useState('black');
  const [maxColor, setMaxColor] = useState('black');

  useEffect(() => {
    if (props.limitObj === 'front') {
      setMinColor('gray');
      setMaxColor('black');
    } else if (props.limitObj === 'end') {
      setMinColor('black');
      setMaxColor('gray');
    } else {
      setMinColor('black');
      setMaxColor('black');
    }
  }, [maxColor, props.limitObj]);

  return (
    <Cover isOther={props.isOther}>
      <Indicator id='frontIndicator' onClick={props.moveFront}>
        <LeftArrow size={40} color={minColor} />
      </Indicator>
      <Body>
        <CardImg
          src={`${window.location.protocol}//${window.location.host}/${props.img}`}
          alt={props.title}
        />
      </Body>
      <Indicator id='endIndicator' onClick={props.moveEnd}>
        <RightArrow size={40} color={maxColor} />
      </Indicator>
    </Cover>
  );
};

const Cover = styled.div`
  display: ${(props) => (props.isOther ? 'flex' : 'none')};
  width: 100%;
  height: 80%;
  max-height: 350px;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  flex-direction: flex;
`;

const Body = styled.div`
  display: flex;
  bottom: 0;
  justify-content: center;
`;

const CardImg = styled.img`
  width: 30%;
  height: 50%;
`;

const Indicator = styled.button`
  width: 50px;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
`;

export default Pager;
