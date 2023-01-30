import * as React from 'react'
import Layout from '../../components/layout/layout'
import Seo from '../../components/seo'
import {graphql} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

const BlogPost = ({location, data, children}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout location={location}>
      <div className="prose lg:prose-xl">
        <h1>{data.mdx.frontmatter.title}</h1>
        <p>{data.mdx.frontmatter.date}</p>
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
        <p>
          Photo Credit:{' '}
          <a href={data.mdx.frontmatter.hero_image_credit_link}>
            {data.mdx.frontmatter.hero_image_credit_text}
          </a>
        </p>
        {children}
      </div>
    </Layout>
  )
}

export const Head = ({data}) => (
  <Seo title={data.mdx.frontmatter.title} description={data.mdx.excerpt} />
)

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      excerpt
    }
  }
`

export default BlogPost
