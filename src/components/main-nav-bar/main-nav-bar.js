import * as React from 'react'
import {Link} from 'gatsby'
import {navLinks, navLinkItem, navLinkText} from './main-nav-bar.module.css'

// Step 2: Define your component
const MainNavBar = () => {
  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>
            About
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/project" className={navLinkText}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavBar
