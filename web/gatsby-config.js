module.exports = {
  siteMetadata: {
    title: `Rota das Vinicolas`,
    description: `Site destinado para apresentação das rotas das vinicolas.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `video`,
        path: `${__dirname}/src/assets/videos`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'avistdb'
        },
        queries: [
          {
            statement: 'SELECT * FROM Contato',
            idFieldName: 'codContato',
            name: 'codContato'
          },

          {
            statement: 'SELECT * FROM Imagem',
            idFieldName: 'codImagem',
            name: 'Imagem',
            remoteImageFieldNames: ['pathImagem']
          }
        ]
      }
    }

  ],
}
