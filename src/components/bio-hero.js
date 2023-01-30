/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react'
import useSiteMetadata from '../hooks/siteMetadata'
import {StaticImage} from 'gatsby-plugin-image'

const BioHero = () => {
  const data = useSiteMetadata()

  const author = data?.author

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="avatar">
            <div className="w-24 rounded-full shadow-2xl ring ring-primary ring-offset-2 ring-offset-base-100">
              <StaticImage
                formats={['auto', 'webp', 'avif']}
                src="../images/profile-pic.png"
                quality={95}
                alt="Profile picture"
              />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">{author.name}</h1>
            <p className="py-6">{author?.summary || null}</p>
            {/* <button className="btn-primary btn">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BioHero
