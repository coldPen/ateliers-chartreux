/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `qtp43omz40l5`,
        accessToken: `uf4QNNsP6fi9ssMiHj5ZfYjIgLGbhVuvB55ACBwn29s`
      }
    }
  ]
}
