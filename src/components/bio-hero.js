/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react'
import useSiteMetadata from '../hooks/siteMetadata'
import {StaticImage} from 'gatsby-plugin-image'

const Avatar = () => {
  return (
    <div className="avatar flex flex-wrap items-center">
      <div className="w-32 rounded-full shadow-2xl ring ring-primary ring-offset-2 ring-offset-base-100">
        <StaticImage
          formats={['auto', 'webp', 'avif']}
          src="../images/profile-pic.png"
          quality={95}
          alt="Vu Pham profile picture"
          width={128}
          height={128}
        />
      </div>
    </div>
  )
}

const BioHero = () => {
  const data = useSiteMetadata()

  const author = data?.author
  const description = data?.description
  return (
    <div className="flex flex-col flex-wrap content-center items-center gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-center text-3xl font-bold">{author.name}</h1>
        <p className="text-center font-light">{description}</p>
      </div>
      <Avatar></Avatar>
    </div>
  )
}

export default BioHero
