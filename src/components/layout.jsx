import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer';
import '../css/app.css';

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        <Footer />
      </>
    )}
  />
)

export default Layout