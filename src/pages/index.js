import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import "../reset.scss"
import {
  intro,
  intro__content,
  intro__title,
  intro__text,
} from "./index.module.scss"

export default ({ data }) => {
  return (
    <Layout>
      <section className={intro}>
        <div className={intro__content}>
          <h2 className={intro__title}>
            Éditorial du {data.contentfulAccueil.date}
          </h2>
          <div
            className={intro__text}
            dangerouslySetInnerHTML={{
              __html: data.contentfulAccueil.texte.childMarkdownRemark.html,
            }}
          ></div>
        </div>
      </section>
    </Layout>
  )
}
export const query = graphql`
  query {
    contentfulAccueil {
      date(formatString: "DD/MM/YYYY")
      texte {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
