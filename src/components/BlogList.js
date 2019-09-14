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
            id
            titre
            dateAndTime(formatString: "L à HH[h]MM")
            tags
            photo {
              fixed(width: 358, height: 269) {
                ...GatsbyContentfulFixed
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
  console.log(data.allContentfulPhotoPosts.edges[0].node.photo.fixed)
  return (
    <section className={blogList}>
      {data.allContentfulPhotoPosts.edges.map((edge, i) => (
        <article className={blogList__article} key={i}>
          <header className={blogList__articleHeader}>
            <h3 className={blogList__articleTitle}>{edge.node.titre}</h3>
            <p className={blogList__articleDate}>{edge.node.dateAndTime}</p>
          </header>
          <Img
            fixed={edge.node.photo.fixed}
            alt={edge.node.photo.description}
          />
        </article>
      ))}
    </section>
  )
}
