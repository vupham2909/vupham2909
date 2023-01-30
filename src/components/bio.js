/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react'
import useSiteMetadata from '../hooks/siteMetadata'
import {StaticImage} from 'gatsby-plugin-image'

const Bio = () => {
  const data = useSiteMetadata()

  const author = data?.author

  return (
    <div>
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
          <StaticImage
            formats={['auto', 'webp', 'avif']}
            src="../images/profile-pic.png"
            quality={95}
            alt="Profile picture"
          />
        </div>
      </div>
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
        </p>
      )}
    </div>
  )
}

export default Bio
