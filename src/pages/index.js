import React from "react"
import { graphql } from "gatsby"
import { Link } from 'gatsby'
import Layout from "../components/layout"

class BlogIndex extends React.Component {
  render() {
    const mdPosts = this.props.data.allMarkdownRemark.edges
    const orgPosts = this.props.data.allOrga.edges
    const org_posts = orgPosts.map ( ({ node }) => {
      const title = node.meta.title || node.fields.slug
      const date = node.meta.date || 'no date'
      return (
        <div>
          <h3 style={{ marginBottom: '0.2em' }}>
            <Link to={node.fields.slug}>{title}</Link>
          </h3>
          <small>{date}</small>
        </div>
      )
    })
    const md_posts = mdPosts.map ( ({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      const date = node.frontmatter.date || 'no date'
      return (
        <div>
          <h3 style={{ marginBottom: '0.2em' }}>
            <Link to={node.fields.slug}>{title}</Link>
          </h3>
          <small>{date}</small>
        </div>
      )
    })
    return (
      <Layout>
        <h1>Hi org-mode people</h1>
        <p>Welcome to your new org+markdown Gatsby site.</p>
        {org_posts}
        {md_posts}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allOrga {
      edges {
        node {
          fields {
            slug
          }
          meta
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
