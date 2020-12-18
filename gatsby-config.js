require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  // pathPrefix: `/www.padeti.com.br`,
  siteMetadata: {
    title: `Soderinni Gourmet`,
    description: `Festas | Corporativos | Aniversários | Casamentos | Almoços | Jantares | Finger Food | Coffee Break | Doces Finos | Bem Casados | Gifts para Eventos`,
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `dancing script`,
          `mystery quest`,
          `griffy`,
          `lato`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
  ],
}
