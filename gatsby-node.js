exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
type MarkdownRemark implements Node {
  frontmatter: Frontmatter
}
type Frontmatter {
  title: String!
  slug: String!
  date: Date! @dateformat(formatString: "YYYY-MM-DD")
  url: String
  technologies: [String]
}`;
  createTypes(typeDefs);
};
