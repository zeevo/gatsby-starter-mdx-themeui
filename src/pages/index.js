import { Link } from "gatsby";

import Layout from "../components/Layout";
import Image from "../components/Image";
import SEO from "../components/SEO";

/** @jsx jsx */
import { jsx } from "theme-ui";

function Index({ data }) {
  console.log(data);
  return (
    <Layout>
      <SEO title="Home" />
      {data.allMdx.edges.map(({ node }) => (
        <div key={node.frontmatter.path}>
          <Link
            to={node.frontmatter.path}
            sx={{
              marginBottom: ".5rem",
              textDecoration: "none",
              color: "text",
              "&:hover": {
                color: "primary",
              },
            }}
          >
            <h2>
              {node.frontmatter.date} - {node.frontmatter.title}
            </h2>
          </Link>
        </div>
      ))}
    </Layout>
  );
}

export default Index;

export const pageQuery = graphql`
  query MyQuery {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            path
            summary
            date
          }
        }
      }
    }
  }
`;
