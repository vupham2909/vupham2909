import * as React from 'react'
import {Link} from 'gatsby'
import {
  mainHeading,
  headerLinkHome,
  globalWrapper,
  globalHeader,
} from './layout.module.css'
import Footer from '../footer/footer'
import useSiteMetadata from '../../hooks/siteMetadata'

const Layout = ({location, children}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const siteMetadata = useSiteMetadata()

  return (
    <div className={globalWrapper} data-is-root-path={isRootPath}>
      <header className={globalHeader}>
        {isRootPath ? (
          <h1 className={mainHeading}>
            <Link to="/">{siteMetadata.title}</Link>
          </h1>
        ) : (
          <Link className={headerLinkHome} to="/">
            {siteMetadata.title}
          </Link>
        )}
      </header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
