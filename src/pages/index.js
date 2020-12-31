import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo/Seo"
import Section from "../components/section/Section"
import IconLinks from "../components/icon-links/IconLinks"

const IndexPage = () => (
  <Layout location="Home">
    <SEO title="Home" />
    <Section
      title="Jennifer Hornig"
      subtitle="{ Designer & Developer }"
      text="JavaScript // React // Gatsby"
    />
    <IconLinks />
  </Layout>
)

export default IndexPage
