import { Link } from "gatsby"
import React from "react"

import settings from "../../config/settings"

const Header = () => (
  <header className="container text-center">
    <h1>
      <Link to="/">{settings.siteTitle}</Link>
    </h1>
    <h3>{settings.siteDescription}</h3>
  </header>
)

export default Header
