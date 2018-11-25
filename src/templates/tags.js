// src/templates/tag.js

import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostListing from "../components/PostListing/PostListing";

export default class TagTemplate extends React.Component {
  render() {
    const { pageContext, data } = this.props;
    const { tag } = pageContext;
    return (
      <Layout>
        <div className="tag-container">
          <Helmet title={`Posts tagged "${tag}"`} />
          <PostListing postEdges={data.allMarkdownRemark.edges} />
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
