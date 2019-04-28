import React from "react"

import settings from "../../config/settings"

const Footer = () => (
  <footer className="container text-center">
    <small>
      &copy; {new Date().getFullYear()} {settings.siteAuthor}
    </small>
  </footer>
)

export default Footer
