import { Link } from "gatsby"
import React from "react"

import settings from "../../config/settings"

const CreateLink = link => {
  // This isn't perfect, but works for my links
  if (link.url.includes("http")) {
    return <a href={link.url}>{link.text}</a>
  }
  return <Link to={link.url}>{link.text}</Link>
}

const Navigation = () => (
  <navigation>
    <div className="container text-center">
      {settings.menuLinks.map(link => (
        <span class="nav">{CreateLink(link)}</span>
      ))}
    </div>
  </navigation>
)

export default Navigation
