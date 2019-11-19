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
  main__image,
  details,
  details__image,
  details__text,
} from "./audiovisuel.module.scss"

export default ({ data, location }) => (
  <Layout>
    <SEO
      title={data.contentfulAudiovisuel.titre}
      description="Présentation du pôle Audiovisuel des Ateliers Chartreux"
      pathname={location.pathname}
    />
    <section className={main}>
      <div className={main__content}>
        <h1 className={main__title}>{data.contentfulAudiovisuel.titre}</h1>
        <div
          className={main__text}
          dangerouslySetInnerHTML={{
            __html:
              data.contentfulAudiovisuel.texteIntro.childMarkdownRemark.html,
          }}
        />
      </div>
      <NonStretchedImage
        className={main__image}
        fluid={data.contentfulAudiovisuel.imageIntro.fluid}
        alt={data.contentfulAudiovisuel.imageIntro.description}
      />
    </section>
    <section className={details}>
      <NonStretchedImage
        className={details__image}
        fluid={data.contentfulAudiovisuel.imageTechnique.fluid}
        alt={data.contentfulAudiovisuel.imageTechnique.description}
      />
      <div
        className={details__text}
        dangerouslySetInnerHTML={{
          __html:
            data.contentfulAudiovisuel.texteTechnique.childMarkdownRemark.html,
        }}
      />
    </section>
  </Layout>
)

export const query = graphql`
  query {
    contentfulAudiovisuel {
      titre
      texteIntro {
        childMarkdownRemark {
          html
        }
      }
      imageIntro {
        fluid {
          ...GatsbyContentfulFluid
        }
        description
      }
      texteTechnique {
        childMarkdownRemark {
          html
        }
      }
      imageTechnique {
        fluid {
          ...GatsbyContentfulFluid
        }
        description
      }
    }
  }
`
