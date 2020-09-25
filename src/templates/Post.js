import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

const shortcodes = { Link }; // Provide common components here

const Post = ({ data: { mdx: post } }) => {
  const { title } = post.frontmatter;
  const { body } = post;
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        title
        path
      }
      body
    }
  }
`;
