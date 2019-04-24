import React from "react"

import settings from "../../config/settings"

const Footer = () => (
  <footer className="container text-center">
    <small>
      &copy; {new Date().getFullYear()} {settings.siteAuthor}, theme by curiositry,
      built with <a href="https://www.gatsbyjs.org">gatsby</a>
    </small>
  </footer>
)

export default Footer
