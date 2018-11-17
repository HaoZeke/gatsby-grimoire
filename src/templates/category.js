import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostListing from "../components/PostListing/PostListing";

export default class TagTemplate extends React.Component {
  render() {
    const { pageContext, data } = this.props;
    const { category } = pageContext;
    return (
      <Layout>
        <div className="tag-container">
          <Helmet title={`Posts in category "${category}"`} />
          <PostListing postEdges={data.allMarkdownRemark.edges} />
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
  allOrga (
    filter: { internal: {content: {regex: "/#+CATEGORY/" }}}
  )
  {
    totalCount
    edges {
      node {
        meta
        html
      }
    }
  }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
  }
`;
