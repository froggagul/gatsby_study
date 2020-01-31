/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'My Blog',
    description: 'This is my blog froggagul.'
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      reslove: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
  ]
}
