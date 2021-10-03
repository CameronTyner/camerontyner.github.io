import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { grid, item, caption } from "./index.module.css";
import Layout from "../components/layout";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};

// data

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout style={pageStyles}>
      <section>
        <h1 style={headingStyles}>
          Hi, I'm <span style={headingAccentStyles}>Cameron Tyner</span>
        </h1>
        <p style={paragraphStyles}>
          Welcome to my portfolio! I am a Full Stack Web/Software Developer
          located in Hamilton, <abbr title="Ontario, Canada">ON</abbr> who
          recently graduated with Honours from the Software Development program
          at Mohawk College.
        </p>
        <p style={paragraphStyles}>
          This page is under construction—content and styling is still being
          worked on.
        </p>
        <div style={paragraphStyles}>
          <p>In the meantime, please see my deployed projects:</p>
          <ul>
            <li>
              <a href="https://cameron-tyner-capstone.herokuapp.com/">
                Capstone Project: Recipe manager
              </a>
            </li>
            <li>
              <a href="http://peaceful-waters-05789.herokuapp.com/">
                Hotel booking
              </a>
            </li>
            <li>
              <a href="http://boiling-escarpment-93527.herokuapp.com/">
                Shopping cart
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <ul className={grid}>
          {data.allMarkdownRemark.nodes.map((node) => (
            <Link to={node.frontmatter.slug}>
              <li className={item} key={node.frontmatter.slug}>
                {node.frontmatter.images && (
                  <GatsbyImage
                    image={getImage(node.frontmatter.images[0].src)}
                    alt=""
                  />
                )}
                <div className={caption}>{node.frontmatter.title}</div>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          url
          slug
          images {
            src {
              childImageSharp {
                gatsbyImageData(width: 800)
              }
            }
          }
          date
        }
      }
    }
  }
`;

export default IndexPage;
