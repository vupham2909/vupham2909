import * as React from 'react'

import BioHero from '../components/bio-hero'
import Layout from '../components/layout/layout'
import Seo from '../components/seo'

const HomeIndex = ({data, location}) => {
  return (
    <Layout>
      <BioHero />
    </Layout>
  )
}

export default HomeIndex

export const Head = () => (
  <Seo title="Home Page" description="Welcome to Vu Pham website" />
)
