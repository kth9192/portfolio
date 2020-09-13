import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import InfoSection from "../components/infoSection"
import ProjectSection from "../components/projectSection"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <InfoSection />
    <ProjectSection />
  </Layout>
)

export default IndexPage
