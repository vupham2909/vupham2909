import * as React from 'react'

// Step 2: Define your component
const Footer = () => {
  // const year = new Date().getFullYear()

  return (
    <footer className="footer fixed bottom-0 left-0 z-20 w-full items-center bg-neutral p-4 text-neutral-content">
      <div className="grid-flow-col items-center">
        {/* <p>Copyright © {year} - All right reserved</p> */}
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://www.linkedin.com/in/vupham2909"
          className="link-hover link"
        >
          LinkedIn
        </a>
        <a href="https://twitter.com/vupham2909" className="link-hover link">
          Twitter
        </a>
        <a
          href="https://www.facebook.com/phamquangvu2909"
          className="link-hover link"
        >
          Facebook
        </a>
        <a href="https://poly.me/vupham" className="link-hover link">
          Polywork
        </a>
        <a href="https://github.com/vupham2909" className="link-hover link">
          Github
        </a>
        <a href="https://hashnode.com/@vupham2909" className="link-hover link">
          Hashnode
        </a>
      </div>
    </footer>
  )
}

export default Footer
