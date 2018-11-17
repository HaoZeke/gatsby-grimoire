import React from "react"
import { graphql } from "gatsby"
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import moment from "moment"
import { sortBy, reverse, map, path, pipe } from 'ramda'
import Layout from "../components/layout"

const NoteRow = ({ title, date, url }) => (
       <div>
          <h3 style={{ marginBottom: '0.2em' }}>
            <Link to={url}>{title}</Link>
          </h3>
          <small>{moment(date).format("DD MMMM, YYYY")}</small>
        </div>
)


var translate = (page) => {
  const { title, date, tags } = page.node.meta || page.node.frontmatter
  const path = page.node.fields.slug
  return (
    <NoteRow title={title} date={date} desc="desc" url={path} tags={tags}/>
  )
}

// Not really needed.
var process = pipe(
  sortBy(path([ 'node', 'meta', 'date' ])),
  reverse,
map(translate))

const BlogIndex = ({data}) => {
    const mdPosts = data.allMarkdownRemark.edges
    const orgPosts = data.allOrga.edges
    return (
      <Layout>
        <h1>About</h1>
        <p>A proof-of-concept gatsby static site with multiple content
        types.</p> <p>This site is a companion site to <OutboundLink
        href="https://grimoire.science">my more academic grimoire</OutboundLink>.</p>
        <h2>Org Posts</h2>
        {process(orgPosts)}
      <h2>Markdown Posts</h2>
        {process(mdPosts)}
      </Layout>
    )
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
