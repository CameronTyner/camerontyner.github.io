import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  container,
  // navLinkItem,
  // navLinks,
  // heading,
  // navLinkText,
  // siteTitle,
} from "./layout.module.css";
import "normalize.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <main className={container}>
      <title>
        {data.site.siteMetadata.title}
        {pageTitle ? " - " + pageTitle : null}
      </title>
      {children}
    </main>
  );
};
export default Layout;
