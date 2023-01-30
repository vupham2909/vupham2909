import * as React from 'react'
import ThemeChanger from './theme-changer'
import {Link} from 'gatsby'
import useSiteMetadata from '../hooks/siteMetadata'

// Step 2: Define your component
const NavbarItemList = () => {
  return (
    <>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/personal">Personal</Link>
      </li>
      <li>
        <Link to="/project">Project</Link>
      </li>
    </>
  )
}

const Navbar = () => {
  const siteMetadata = useSiteMetadata()
  return (
    <div
      className="
  sticky top-0 z-30 flex h-16 w-full justify-center bg-base-100 bg-black/90 text-base-content backdrop-blur 
  transition-all duration-100
  "
    >
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn-ghost btn lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <NavbarItemList></NavbarItemList>
            </ul>
          </div>
          <Link className="btn-ghost btn text-xl normal-case" to="/">
            {siteMetadata.title}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavbarItemList></NavbarItemList>
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeChanger></ThemeChanger>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
