import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Img } from "gatsby-image"
import {
  blogList,
  blogList__article,
  blogList__articleHeader,
  blogList__articleTitle,
  blogList__articleDate,
} from "./BlogList.module.scss"

export default () => {
  const data = useStaticQuery(graphql`
    query BlogListQuery {
      allContentfulPhotoPosts {
        edges {
          node {
            titre
            dateAndTime(formatString: "L à HH[h]MM")
            tags
            photo {
              file {
                url
              }
              title
              description
            }
            description {
              description
            }
          }
        }
      }
    }
  `)
  return (
    <section className={blogList}>
      {data.allContentfulPhotoPosts.edges.map(edge => (
        <article className={blogList__article}>
          <header className={blogList__articleHeader}>
            <h3 className={blogList__articleTitle}>{edge.node.titre}</h3>
            <p className={blogList__articleDate}>{edge.node.dateAndTime}</p>
          </header>
        </article>
      ))}
    </section>
  )
}
