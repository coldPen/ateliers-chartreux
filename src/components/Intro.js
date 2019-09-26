import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  intro,
  intro__content,
  intro__title,
  intro__text,
} from "./Intro.module.scss"

export default () => {
  const data = useStaticQuery(graphql`
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
  `)
  return (
    <section className={intro}>
      <div className={intro__content}>
        <h2 className={intro__title}>Édito du {data.contentfulAccueil.date}</h2>
        <div
          className={intro__text}
          dangerouslySetInnerHTML={{
            __html: data.contentfulAccueil.texte.childMarkdownRemark.html,
          }}
        />
      </div>
    </section>
  )
}
