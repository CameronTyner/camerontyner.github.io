import React from "react";
import { graphql, Link } from "gatsby";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import backArrowIcon from "../images/back_arrow.svg";
import { back, slickTrack, slickNext, slickPrev } from "./slug.module.css";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  const settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // centerMode: true,
  };

  return (
    <Layout pageTitle={frontmatter.title} className="blog-post-container">
      <nav>
        <Link to={"/"} title="Back to home" id={back}>
          <img src={backArrowIcon} alt="" />
          {/*<p>Back to home</p>*/}
        </Link>
      </nav>
      <div className="blog-post">
        <Slider {...settings} className={[slickTrack, slickNext, slickPrev]}>
          {frontmatter.images?.map((image) => (
            <div>
              <GatsbyImage image={getImage(image.src)} alt="" />
              <p>{image.caption}</p>
            </div>
          ))}
        </Slider>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM, YYYY")
        slug
        title
        images {
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
          caption
        }
      }
    }
  }
`;
