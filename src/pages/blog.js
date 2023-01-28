import * as React from 'react'
import Layout from '../components/layout/layout'
import Seo from '../components/seo'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

const BlogPage = ({location, data}) => {
  return (
    <Layout location={location}>
      <ul>
        {data.allFile.nodes.map(node => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allFile: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`
export const Head = () => (
  <Seo title="Blog Posts" description="List of blog posts" />
)

export default BlogPage
