// import { useState, useEffect } from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          social {
            twitter
          }
          siteUrl
          description
          author {
            name
            summary
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
