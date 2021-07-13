import * as React from "react";

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
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Hi, I'm <span style={headingAccentStyles}>Cameron Tyner</span>
      </h1>
      <p style={paragraphStyles}>
        Welcome to my portfolio! I am a full-stack/software developer who
        recently graduated with honours from the 3-year Software Development
        program at Mohawk College in Hamilton,{" "}
        <abbr title="Ontario, Canada">ON</abbr>.
      </p>
      <p style={paragraphStyles}>
        This page is still under construction (as of 2021-07-13). Please check
        back soon as content (and styling) is still being worked on.
      </p>
      <p style={paragraphStyles}>
        In the meantime, please see my deployed projects:
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
      </p>
    </main>
  );
};

export default IndexPage;
