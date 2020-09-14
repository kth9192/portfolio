import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import InfoSection from "../components/infoSection"
import ProjectSection from "../components/projectSection"
import ProjectDetailSection from "../components/projectDetailSection"
import SEO from "../components/seo"
import Dotenv from "dotenv"
Dotenv.config()

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <InfoSection />
    <ProjectSection />
    <ProjectDetailSection />
  </Layout>
)

export default IndexPage
