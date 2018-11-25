import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage = () => (
<Layout>
  <div>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p>Perhaps you meant to go to the <Link to="/categories">Category Cloud </Link>
    or the <Link to="/tags">Tag Cloud</Link>?</p>
  </div>
  </Layout>
)

export default NotFoundPage
