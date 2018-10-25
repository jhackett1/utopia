module.exports = {
  siteMetadata: {
    title: 'Utopia',
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/components/favicon.png",
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Ubuntu:300,400,700`
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/posts`,
        name: "posts",
      },
    },
    `gatsby-transformer-remark`
  ],
}
