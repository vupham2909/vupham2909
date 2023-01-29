import * as React from 'react'
import Layout from '../../components/layout/layout'
import Seo from '../../components/seo'
import {graphql} from 'gatsby'

const BlogPost = ({location, data, children}) => {
  return (
    <Layout location={location}>
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Super Cool Blog Posts"
    description="Super Cool Blog Posts description"
  />
)

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export default BlogPost
