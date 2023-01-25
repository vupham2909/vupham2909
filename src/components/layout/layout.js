import * as React from "react"
import { Link } from "gatsby"
import {
  mainHeading,
  headerLinkHome,
  globalWrapper,
  globalHeader,
} from "./layout.module.css"
import Footer from "../footer/footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className={globalWrapper} data-is-root-path={isRootPath}>
      <header className={globalHeader}>
        {isRootPath ? (
          <h1 className={mainHeading}>
            <Link to="/">{title}</Link>
          </h1>
        ) : (
          <Link className={headerLinkHome} to="/">
            {title}
          </Link>
        )}
      </header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
