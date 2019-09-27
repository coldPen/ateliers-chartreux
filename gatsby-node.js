const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Get an array of each post's slug
  const result = await graphql(`
    query {
      allContentfulPhotoPosts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // Create blog posts
  result.data.allContentfulPhotoPosts.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve(`./src/templates/BlogPost.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })

  // Create the paginated list of blog posts
  const posts = result.data.allContentfulPhotoPosts.edges
  const postsPerPage = 12
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/Home.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
