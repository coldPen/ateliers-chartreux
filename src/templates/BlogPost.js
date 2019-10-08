import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import NonStretchedImage from "../components/NonStretchedImage"
import SEO from "../components/SEO"

import "../reset.scss"

import {
  blogPost,
  blogPost__header,
  blogPost__title,
  blogPost__date,
  blogPost__image,
  blogPost__text,
  blogPost__description,
  blogPost__tags,
  blogPost__tag,
} from "./BlogPost.module.scss"

export default ({ data }) => (
  <Layout>
    <SEO
      title={data.contentfulPhotoPosts.titre}
      description={
        data.contentfulPhotoPosts.description.childMarkdownRemark.excerpt
      }
      image={data.contentfulPhotoPosts.photo.file.url}
      pathname={`/blog/${data.contentfulPhotoPosts.slug}`}
      article
    />
    <article className={blogPost}>
      <header className={blogPost__header}>
        <h1 className={blogPost__title}>{data.contentfulPhotoPosts.titre}</h1>
        <p className={blogPost__date}>{data.contentfulPhotoPosts.createdAt}</p>
      </header>
      <NonStretchedImage
        fluid={data.contentfulPhotoPosts.photo.fluid}
        className={blogPost__image}
        alt={data.contentfulPhotoPosts.photo.description}
      />
      <div className={blogPost__text}>
        <div
          className={blogPost__description}
          dangerouslySetInnerHTML={{
            __html:
              data.contentfulPhotoPosts.description.childMarkdownRemark.html,
          }}
        ></div>
        <div className={blogPost__tags}>
          Tags :{" "}
          {data.contentfulPhotoPosts.tags.map((tag, i) => (
            <span className={blogPost__tag} key={i}>
              {tag}
            </span>
          ))}
        </div>
      </div>
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
        file {
          url
        }
        fluid(maxWidth: 903, maxHeight: 903) {
          ...GatsbyContentfulFluid
        }
      }
      description {
        childMarkdownRemark {
          excerpt
          html
        }
      }
      createdAt(formatString: "DD/MM/YYYY à HH[h]mm")
    }
  }
`
