import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export function GetImage({ title, width, height }) {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  const image = data.allImageSharp.edges.find(
    edge => edge.node.fluid.originalName === title
  )
  if (!image) {
    return null
  }
  const overrideImageProps = {
    ...image.node.fluid,
    width,
    height,
  }

  return <Img fluid={overrideImageProps} />
}
