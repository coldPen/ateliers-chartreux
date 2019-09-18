import React from "react"
import { graphql } from "gatsby"

import Img from "gatsby-image"

import Layout from "../components/Layout"
import NonStretchedImage from "../components/NonStretchedImage"

import {
  blogPost,
  blogPost__title,
  blogPost__image,
} from "./BlogPost.module.scss"

export default ({ data }) => (
  <Layout>
    <article className={blogPost}>
      <h1 className={blogPost__title}>{data.contentfulPhotoPosts.titre}</h1>
      <NonStretchedImage
        fluid={data.contentfulPhotoPosts.photo.fluid}
        className={blogPost__image}
      />
      {/* <Img
        fluid={data.contentfulPhotoPosts.photo.fluid}
        className={blogPost__image}
      /> */}
      {/* <img src={data.contentfulPhotoPosts.photo.file.url} alt="" /> */}
    </article>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    contentfulPhotoPosts(slug: { eq: $slug }) {
      slug
      titre
      tags
      photo {
        description
        fluid(maxWidth: 903, maxHeight: 903) {
          ...GatsbyContentfulFluid
        }
      }
      description {
        description
      }
      createdAt(formatString: "DD/MM/YYYY à HH[h]mm")
    }
  }
`
