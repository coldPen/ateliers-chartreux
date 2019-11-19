import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import NonStretchedImage from "../components/NonStretchedImage"

import "../reset.scss"
import {
  impression,
  impression__title,
  impression__3d,
  impression__2d,
  impression__text,
  impression__image,
} from "./impression.module.scss"

export default ({ data, location }) => (
  <Layout>
    <SEO
      title={data.contentfulImpression.titre}
      description="Présentation du pôle Impression 2D / 3D des Ateliers Chartreux"
      pathname={location.pathname}
    />
    <div className={impression}>
      <h1 className={impression__title}>{data.contentfulImpression.titre}</h1>
      <section className={impression__3d}>
        <div
          className={impression__text}
          dangerouslySetInnerHTML={{
            __html:
              data.contentfulImpression.impression3d.childMarkdownRemark.html,
          }}
        />
        <NonStretchedImage
          className={impression__image}
          fluid={data.contentfulImpression.image3d.fluid}
        />
      </section>
      <section className={impression__2d}>
        <div
          className={impression__text}
          dangerouslySetInnerHTML={{
            __html:
              data.contentfulImpression.impression2d.childMarkdownRemark.html,
          }}
        />
        <NonStretchedImage
          className={impression__image}
          fluid={data.contentfulImpression.image2d.fluid}
        />
      </section>
    </div>
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
