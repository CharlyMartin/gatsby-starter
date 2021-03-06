import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="container">
      <h1>This is page 2</h1>
      
      <Link to="/">Go home</Link>
    </div>
  </Layout>
)

export default SecondPage
