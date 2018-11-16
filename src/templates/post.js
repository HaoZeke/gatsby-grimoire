import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPostTemplate = ({data}) => {
  const post = data.orga || data.markdownRemark
  const { title, date } = post.meta || post.frontmatter

    return (
      <Layout>
        <center>
          <h1>{title}</h1>
          <small>{date}</small>
        </center>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    orga(fields: { slug: { eq: $slug }}) {
      html
      meta
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
