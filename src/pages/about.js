// Step 1: Import React
import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = ({location}) => {
  return (
    <Layout location={location}>
      <h1>About Me</h1>
      <Link to="/">Back to home</Link>
      <p>
        Hi there! I&apos;m the proud creator of this site, which I built with
        Gatsby.
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" description="About Vu Pham" />

// Step 3: Export your component
export default AboutPage
