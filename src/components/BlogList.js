import React from "react"
import { Link } from "gatsby"

import NonStretchedImage from "../components/NonStretchedImage"

import {
  blogList,
  blogList__article,
  blogList__articleHeader,
  blogList__articleTitle,
  blogList__articleDate,
  blogList__articleImage,
} from "./BlogList.module.scss"

export default ({ data }) => (
  <section className={blogList}>
    {data.allContentfulPhotoPosts.edges.map((edge, i) => (
      <Link
        to={`/blog/${edge.node.slug}`}
        className={blogList__article}
        key={i}
      >
        <header className={blogList__articleHeader}>
          <h3 className={blogList__articleTitle}>{edge.node.titre}</h3>
          <p className={blogList__articleDate}>{edge.node.createdAt}</p>
        </header>
        <NonStretchedImage
          fluid={edge.node.photo.fluid}
          alt={edge.node.photo.description}
          className={blogList__articleImage}
        />
      </Link>
    ))}
  </section>
)
