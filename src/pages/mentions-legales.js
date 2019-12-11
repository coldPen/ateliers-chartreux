import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import "../reset.scss"
import { legal, legal__title } from "./mentions-legales.module.scss"

export default ({ data, location }) => (
  <Layout>
    <SEO title="" description="" pathname={location.pathname} />
    <section className={legal}>
      <h1 className={legal__title}>{data.contentfulMentionsLegales.titre}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html:
            data.contentfulMentionsLegales.mentionsLegales.childMarkdownRemark
              .html,
        }}
      />
    </section>
  </Layout>
)

export const query = graphql`
  query {
    contentfulMentionsLegales {
      titre
      description {
        description
      }
      mentionsLegales {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
