require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  // pathPrefix: `/www.padeti.com.br`,
  siteMetadata: {
    title: `Café Campestre`,
    description: `O melhor café da cidade bem pertinho de você`,
    author: `André Padeti`,
  },

  plugins: [
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Café Campestre`,
        short_name: `Café`,
        start_url: `/`,
        background_color: `#67a735`,
        theme_color: `#67a735`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-smoothscroll`,
  ],
}
