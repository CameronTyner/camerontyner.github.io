module.exports = {
  siteMetadata: {
    siteUrl: "https://camerontyner.github.io",
    pathPrefix: "/camerontyner.github.io",
    title: "Cameron Tyner Portfolio",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects/`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],
};
