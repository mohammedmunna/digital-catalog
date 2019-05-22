module.exports = {
  siteMetadata: {
    title: `Digital Catalog`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-apiserver",
      options: {
        typePrefix: "api__",
        url: `http://192.168.228.81:40002/product-offering`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        data: {},
        name: `data`,
        //entityLevel: `data`,
        auth: {
          username: null,
          password: null,
        },
        localSave: false,
        //path: `${__dirname}/src/data/auth/`,
        verboseOutput: true,
        skipCreateNode: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
