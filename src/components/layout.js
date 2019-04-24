/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"
import "../styles/main.scss"

const Layout = ({ children }) => (
  <>
    <Header />
    <Navigation />
    <main id="main-content">{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
