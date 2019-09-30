import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import Intro from "../components/Intro"
import BlogList from "../components/BlogList"
import BlogListPagination from "../components/BlogListPagination"

import "../reset.scss"

export default ({ data, pageContext }) => {
  const { currentPage } = pageContext
  const isFirst = currentPage === 1
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ateliers Chartreux à Marseille</title>
        <link rel="canonical" href="https://ateliers-chartreux.fr/" />
      </Helmet>
      {isFirst && <Intro />}
      <BlogList data={data} />
      <BlogListPagination pageContext={pageContext} />
    </Layout>
  )
}

// /!\ Ajuster les dimensions maximales d'images avant lancement du site
export const query = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allContentfulPhotoPosts(
      limit: $limit
      skip: $skip
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          titre
          slug
          createdAt(formatString: "DD/MM/YYYY à HH[h]mm")
          photo {
            fluid(maxWidth: 400, maxHeight: 225) {
              ...GatsbyContentfulFluid
            }
            title
            description
          }
          description {
            description
          }
        }
      }
    }
  }
`
