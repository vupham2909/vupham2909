import * as React from 'react'

import Footer from '../footer/footer'
import Navbar from '../navbar'

const Layout = ({children}) => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>

      <main className="container mx-auto p-4">{children}</main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
