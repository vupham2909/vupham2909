import * as React from 'react'

// Step 2: Define your component
const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer>
      © {year}, Built with {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}

export default Footer
