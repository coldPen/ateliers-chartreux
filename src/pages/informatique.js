import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import NonStretchedImage from "../components/NonStretchedImage"

import "../reset.scss"
import {
  main,
  main__content,
  main__title,
  main__text,
  main__imageContainer,
  main__image,
  details,
} from "./informatique.module.scss"

export default ({ data, location }) => (
  <Layout>
    <SEO
      title={data.contentfulInformatique.titre}
      description="Présentation du pôle Informatique des Ateliers Chartreux"
      pathname={location.pathname}
    />
    <section className={main}>
      <div className={main__content}>
        <h1 className={main__title}>{data.contentfulInformatique.titre}</h1>
        <div
          className={main__text}
          dangerouslySetInnerHTML={{
            __html:
              data.contentfulInformatique.textePrincipal.childMarkdownRemark
                .html,
          }}
        />
      </div>
      <div className={main__imageContainer}>
        <NonStretchedImage
          className={main__image}
          fluid={data.contentfulInformatique.image.fluid}
          alt={data.contentfulInformatique.image.description}
        />
      </div>
    </section>
    <section
      className={details}
      dangerouslySetInnerHTML={{
        __html: data.contentfulInformatique.details.childMarkdownRemark.html,
      }}
    />
  </Layout>
)

// fluid: penser à préciser les dimensions optimum avant mise en ligne
export const query = graphql`
  query {
    contentfulInformatique {
      titre
      image {
        file {
          url
        }
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      textePrincipal {
        childMarkdownRemark {
          html
        }
      }
      details {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
