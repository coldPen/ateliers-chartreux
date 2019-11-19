import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import "../reset.scss"

export default ({ data, location }) => (
  <Layout>
    <SEO
      title={data.contentfulAudiovisuel.titre}
      description="Présentation du pôle Audiovisuel des Ateliers Chartreux"
      pathname={location.pathname}
    />
    <section>
      <h1>{data.contentfulAudiovisuel.titre}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html:
            data.contentfulAudiovisuel.texteIntro.childMarkdownRemark.html,
        }}
      ></div>
    </section>
    <section></section>
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
        file {
          url
        }
        fluid {
          ...GatsbyContentfulFluid
        }
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
      }
    }
  }
`
