import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo/Seo"
import Section from "../components/section/Section"

const NotFoundPage = () => (
  <Layout location="followup">
    <SEO title="404: Not found" />
    <Section
      title="Page not found"
      text="There doesn't seem to be a page where you tried to go."
      buttonLabel="Back to Home"
      buttonLink="/"
    />
  </Layout>
)

export default NotFoundPage
