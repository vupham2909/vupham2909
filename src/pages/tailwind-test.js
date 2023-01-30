import * as React from 'react'
// import {Link} from 'gatsby'
import Layout from '../components/layout/layout'
import Seo from '../components/seo'

const TailwindPage = () => {
  return (
    <Layout>
      <button className="btn">Button</button>
      <button className="btn-primary btn">Button</button>
      <button className="btn w-64 rounded-full">Button</button>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" description="About Vu Pham" />

// Step 3: Export your component
export default TailwindPage
