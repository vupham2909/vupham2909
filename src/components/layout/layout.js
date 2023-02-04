import * as React from 'react'

// import Footer from '../footer/footer'
import Navbar from '../navbar'

const Layout = ({children}) => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>

      <main className="container mx-auto flex flex-col flex-wrap gap-5">
        {children}
      </main>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default Layout
