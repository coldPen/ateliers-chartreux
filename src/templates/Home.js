import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Intro from "../components/Intro"
import BlogList from "../components/BlogList"

import "../reset.scss"

export default ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/" : `/blog/${(currentPage - 1).toString()}`
  const nextPage = (currentPage + 1).toString()
  return (
    <Layout>
      {isFirst && <Intro />}
      <BlogList data={data} />
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
          id
          titre
          slug
          createdAt(formatString: "DD/MM/YYYY à HH[h]mm")
          photo {
            fixed(width: 306, height: 172) {
              ...GatsbyContentfulFixed
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
