import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Intro from "../components/Intro"
import BlogList from "../components/BlogList"
import BlogListPagination from "../components/BlogListPagination"
import SEO from "../components/SEO"

import "../reset.scss"

export default ({ data, pageContext }) => {
  const { currentPage } = pageContext
  const isFirst = currentPage === 1
  return (
    <Layout>
      <SEO />
      {isFirst && <Intro />}
      <BlogList data={data} />
      <BlogListPagination pageContext={pageContext} />
    </Layout>
  )
}

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
