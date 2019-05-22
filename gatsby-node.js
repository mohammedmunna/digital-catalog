const path = require(`path`)

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "api__data") {
    const slug = node._id

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

module.exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const shopItemTemplate = path.resolve(`./src/templates/shop-item.js`)
  return graphql(`
    query {
      allApiData {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allApiData.edges.forEach(edge => {
      createPage({
        component: shopItemTemplate,
        path: `/shop/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    })
  })
}
