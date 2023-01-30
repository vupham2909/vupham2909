import * as React from 'react'
import Layout from '../../components/layout/layout'
import Seo from '../../components/seo'
import {Link, graphql} from 'gatsby'

const PersonalBlogPage = ({data}) => {
  return (
    <Layout>
      {data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <Link to={node.frontmatter.slug} itemProp="url">
            <span itemProp="headline">{node.frontmatter.title}</span>
          </Link>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMdx(
      filter: {frontmatter: {category: {eq: "personal"}}}
      sort: {frontmatter: {date: DESC}}
    ) {
      nodes {
        excerpt
        id
        frontmatter {
          category
          date
          description
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          hero_image_alt
          hero_image_credit_link
          hero_image_credit_text
          slug
          title
        }
      }
    }
  }
`
export const Head = () => (
  <Seo title="Project Posts" description="List of project posts" />
)

export default PersonalBlogPage
