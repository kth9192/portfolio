/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import HeaderBar from "./headerBar"
import TitleBox from "./titleBox"
import { GlobalStyle } from "../globalStyle"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Cover>
      <GlobalStyle />
      <HeaderBar siteTitle={data.site.siteMetadata.title} />
      <TitleBox />
      <main>{children}</main>
      <footer>
        <div id="modal" />© {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Cover>
  )
}

const Cover = styled.div`
  width: 100%;
  height: 100vh;

  main {
    display: grid;
    width: 100%;
    grid-template-rows: 15% 20% 1fr;
    justify-items: center;
  }

  footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 1rem;
    min-height: 10%;
    background-color: #27303a;
    color: white;
    padding: 1rem;

    a,
    a:hover,
    a:visited,
    a:active {
      color: white;
    }
    a.selected {
      color: white;
    }
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
