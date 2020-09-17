import React from "react"
import styled from "styled-components"
import { Github } from "@styled-icons/simple-icons"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const goGit = e => {
  window.location = "https://github.com/kth9192"
}

export const BgImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "laptop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />
}

function TitleBox() {
  return (
    <Cover>
      <BgImg />
      <TitleContainer>
        <Title>
          <h2>KIM TAE HOON</h2>
        </Title>
        <h3>Developer Portfolio</h3>
        <LinkBox>
          <LinkBtn onClick={goGit}>
            <CustomGit size="50" />
          </LinkBtn>
        </LinkBox>
      </TitleContainer>
    </Cover>
  )
}

const Cover = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  float: left;
  h1 {
    font-size: 30px;
    text-align: center;
  }
  margin-bottom: 5rem;
`

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
`

const TitleContainer = styled.span`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  justify-content: center;
  color: #fff;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 3;
  h2 {
    font-size: 2rem;

    @media only screen and (min-width: 768px) {
      font-size: 3.125rem;
    }
  }
  :after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 100px;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 50%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`

const Title = styled.div`
  width: fit-content;
  margin: 1rem 0;
  border-bottom: 2px white solid;
  h2 {
    font-weight: bold;
    padding: 1rem 0;
  }
`

const LinkBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`

const LinkBtn = styled.button`
  display: flex;
  width: 4rem;
  height: fit-content;
  border: none;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  img {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: 4px;
    filter: invert(1);
    transition: all 0.8s ease;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: white;
    font-weight: bold;
    svg {
      color: black;
      filter: invert(0);
      font-weight: bold;
      transition: all 0.8s ease;
    }
    p {
      text-decoration: underline;
    }
  }
`

const CustomGit = styled(Github)`
  cursor: pointer;
  text-decoration: none;
  color: white;
  transition: all 0.8s ease;
`

export default TitleBox
