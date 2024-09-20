/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `patrimonionacional.es`,
    description: `Application de generador de QRS para todo patrimonio nacional. `,
    author: `MR. Teclas 2.0`,
    siteUrl: `https://www.patrimonionacional.es/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-netlify`, // Asegúrate de agregarlo aquí
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Logo_de_Patrimonio_Nacional.svg.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
