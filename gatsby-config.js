/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// Load environment variables
require("dotenv").config({ path: `.env` })

module.exports = {
  // Default metadata (if needed)
  siteMetadata: {
    title: "Ateliers Chartreux à Marseille",
    titleTemplate: "%s · Ateliers Chartreux",
    description:
      "Site web des Ateliers Chartreux, atelier marseillais dédié à la fabrication numérique, à l'informatique et à l'audiovisuel.",
    url: "https://ateliers-chartreux.fr", // No trailing slash allowed!
    image: "/images/image.jpg", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: "https://ateliers-chartreux.fr",
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        // Next two properties overwritten because of gatsby-image
        // https://bejamas.io/blog/content-security-policy-gatsby-websites/
        mergeStyleHashes: false,
        directives: { "style-src": "'self' 'unsafe-inline'" },
      },
    },
  ],
}
