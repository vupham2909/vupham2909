import * as React from 'react'
import Layout from '../../components/layout/layout'
import Seo from '../../components/seo'
import {Link, graphql} from 'gatsby'

const ProjectPage = ({location, data}) => {
  return (
    <Layout location={location}>
      {data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <Link to={node.frontmatter.slug} itemProp="url">
            <span itemProp="headline">{node.frontmatter.title}</span>
          </Link>
          <p>
            Posted: {node.frontmatter.date} | Last updated:{' '}
            {node.parent.modifiedTime}
          </p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          slug
          title
        }
        parent {
          ... on File {
            modifiedTime(formatString: "MMMM D, YYYY")
          }
        }
        id
        excerpt
      }
    }
  }
`
export const Head = () => (
  <Seo title="Project Posts" description="List of project posts" />
)

export default ProjectPage
