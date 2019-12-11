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
  details__imageContainer,
  details__image,
  details__text,
} from "./audiovisuel.module.scss"

export default ({ data, location }) => (
  <Layout>
    <SEO
      title={data.contentfulAudiovisuel.titre}
      description={data.contentfulAudiovisuel.description.description}
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
      <div className={main__imageContainer}>
        <NonStretchedImage
          className={main__image}
          fluid={data.contentfulAudiovisuel.imageIntro.fluid}
          alt={data.contentfulAudiovisuel.imageIntro.description}
        />
      </div>
    </section>
    <section className={details}>
      <div className={details__imageContainer}>
        <NonStretchedImage
          className={details__image}
          fluid={data.contentfulAudiovisuel.imageTechnique.fluid}
          alt={data.contentfulAudiovisuel.imageTechnique.description}
        />
      </div>
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
      description {
        description
      }
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
