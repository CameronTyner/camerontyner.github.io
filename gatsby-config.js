module.exports = {
  siteMetadata: {
    siteUrl: "https://camerontyner.github.io",
    pathPrefix: "/camerontyner.github.io",
    title: "Cameron Tyner Portfolio",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
  ],
};
