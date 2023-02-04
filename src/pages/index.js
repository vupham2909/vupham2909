import * as React from 'react'

import BioHero from '../components/bio-hero'
import Layout from '../components/layout/layout'
import Seo from '../components/seo'
import SocialLinks from '../components/social-links'

const HomeIndex = ({data, location}) => {
  return (
    <Layout>
      <BioHero />
      <SocialLinks />
    </Layout>
  )
}

export default HomeIndex

export const Head = () => (
  <Seo title="" description="Step into my digital playground" />
)
