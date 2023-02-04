// Step 1: Import React
import * as React from 'react'

const SocialLink = ({to, label, style}) => {
  const linkClassName = `${style} link`
  return (
    <a className={linkClassName} href={to} target="_blank" rel="noreferrer">
      {label}
    </a>
  )
}

// Step 2: Define your component
const SocialLinks = () => {
  return (
    <div className="m-4 flex flex-row flex-wrap content-center items-center justify-center gap-4">
      <SocialLink
        to="https://www.linkedin.com/in/vupham2909"
        label="LinkedIn"
        style="link-primary"
      />
      <SocialLink
        to="https://twitter.com/vupham2909"
        label="Twitter"
        style="link-primary"
      />
      <SocialLink
        to="https://www.facebook.com/phamquangvu2909"
        label="Facebook"
        style="link-primary"
      />
      <SocialLink
        to="https://poly.me/vupham"
        label="Timeline"
        style="link-primary"
      />
      <SocialLink
        to="https://github.com/vupham2909"
        label="Github"
        style="link-primary"
      />
      <SocialLink
        to="https://hashnode.com/@vupham2909"
        label="Hashnode"
        style="link-primary"
      />
      <SocialLink
        to="https://vupham2909.notion.site/Vu-Pham-s-Notes-c48f50f451f943538ee6daf698f7d24c"
        label="Notes"
        style="link-primary"
      />
      <SocialLink
        to="https://stackoverflow.com/users/2905871/vu-pham"
        label="Stackoverflow"
        style="link-primary"
      />
      <SocialLink
        to="https://www.credly.com/users/vupham2909/badges"
        label="Credly"
        style="link-primary"
      />
      <SocialLink
        to="https://dev.to/vupham2909"
        label="Dev.to"
        style="link-primary"
      />
    </div>
  )
}

export default SocialLinks
