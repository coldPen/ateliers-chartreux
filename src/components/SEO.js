import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import favicon from "../../static/favicon.ico"

const SEO = ({ title, description, image, pathname, article }) => (
  <StaticQuery
    query={graphql`
      query SEO {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl: url
            defaultImage: image
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || "/"}`,
      }

      return (
        <Helmet
          htmlAttributes={{
            lang: "fr",
          }}
          title={seo.title}
          titleTemplate={seo.title === defaultTitle ? null : titleTemplate}
        >
          {/* Favicon */}
          <link rel="icon" href={favicon} />
          {/* Meta Tags */}
          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.image} />

          {/* Open Graph */}
          <meta property="og:url" content={seo.url} />
          <meta property="og:type" content={article ? "article" : "website"} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image" content={seo.image} />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:image" content={seo.image} />
        </Helmet>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}
