// Step 1: Import React
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"

// Step 2: Define your component
const AboutPage = ({ location }) => {
  const siteTitle = `Gatsby Starter Blog`
  return (
    <Layout location={location} title={siteTitle}>
      <h1>About Me</h1>
      <Link to="/">Back to home</Link>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage
