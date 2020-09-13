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
import TitleBox from "../components/titleBox"
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
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Cover>
  )
}

const Cover = styled.div`
  width: 100%;
  height: 100vh;

  main {
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
