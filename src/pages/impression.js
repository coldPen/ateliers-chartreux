import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import NonStretchedImage from "../components/NonStretchedImage"

import "../reset.scss"
import { impression3d, impression2d } from "./impression.module.scss"

export default () => (
  <Layout>
    <SEO
      title="Impression 2D / 3D"
      description="Présentation du pôle Impression 2D / 3D des Ateliers Chartreux"
      pathname="/impression"
    />
    <section className={impression3d}>
      <h1></h1>
      <p></p>
    </section>
    <section></section>
  </Layout>
)

export const query = graphql`
  query {
    contentfulImpression {
      titre
      impression3d {
        childMarkdownRemark {
          html
        }
      }
      image3d {
        file {
          url
        }
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      impression2d {
        childMarkdownRemark {
          html
        }
      }
      image2d {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
