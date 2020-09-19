import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export function GetImage({ title }) {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)

  const image = data.allImageSharp.edges.find(edge => {
    return edge.node.fluid.originalName === title
  })
  if (!image) {
    return null
  }

  return (
    <Img
      fluid={image.node.fluid}
      imgStyle={{ objectFit: "contain" }}
      style={{ maxHeight: "300px" }}
    />
  )
}
