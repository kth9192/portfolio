import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pager = props => {
  const moveFront = e => {
    console.log("앞");
  };

  const moveEnd = e => {
    console.log("뒤");
  };

  return (
    <Fragment>
      <button id="frontIndicator" onClick={props.moveFront}>
        <IoIosArrowBack />
      </button>
      <button id="endIndicator" onClick={props.moveEnd}>
        <IoIosArrowForward />
      </button>
    </Fragment>
  );
};

const Indicator = styled;

export default Pager;
