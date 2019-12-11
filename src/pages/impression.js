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
  impression__imageContainer,
  impression__image,
} from "./impression.module.scss"

export default ({ data, location }) => (
  <Layout>
    <SEO
      title={data.contentfulImpression.titre}
      description={data.contentfulImpression.description.description}
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
        <div className={impression__imageContainer}>
          <NonStretchedImage
            className={impression__image}
            fluid={data.contentfulImpression.image3d.fluid}
            alt={data.contentfulImpression.image3d.description}
          />
        </div>
      </section>
      <section className={impression__2d}>
        <div
          className={impression__text}
          dangerouslySetInnerHTML={{
            __html:
              data.contentfulImpression.impression2d.childMarkdownRemark.html,
          }}
        />
        <div className={impression__imageContainer}>
          <NonStretchedImage
            className={impression__image}
            fluid={data.contentfulImpression.image2d.fluid}
            alt={data.contentfulImpression.image2d.description}
          />
        </div>
      </section>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    contentfulImpression {
      titre
      description {
        description
      }
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
        description
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
        description
      }
    }
  }
`
