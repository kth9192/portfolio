import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"

const moveTo = e => {
  const target = document.querySelectorAll("." + e.target.className)[1]
  target.scrollIntoView()
}

const HeaderBar = ({ siteTitle }) => (
  <Cover className="cover">
    <TopMenu>맨 위로</TopMenu>
  </Cover>
)

const Cover = styled.header`
  display: flex;
  width: 100%;
  height: 8%;
  float: left;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  background-color: white;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  z-index: 100;
  img {
    width: 100%;
    height: 100%;
  }
`

const TopMenu = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  align-items: center;
  margin-right: 16px;
  p {
    font-weight: bold;
    font-size: 50px;
    border-bottom: 1px solid;
  }
`

HeaderBar.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderBar.defaultProps = {
  siteTitle: ``,
}

export default HeaderBar
