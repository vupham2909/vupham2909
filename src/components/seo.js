/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react'
import useSiteMetadata from '../hooks/siteMetadata'

const Seo = ({description, title, children}) => {
  const siteMetadata = useSiteMetadata()

  const metaDescription = description || siteMetadata?.description
  const defaultTitle = siteMetadata?.title
  const twitterUsername = siteMetadata?.social?.twitter || ``

  return (
    <>
      <title>
        {defaultTitle
          ? title == ''
            ? defaultTitle
            : `${title} | ${defaultTitle}`
          : title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

export default Seo
