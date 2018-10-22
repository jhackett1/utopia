module.exports = {
  siteMetadata: {
    title: 'Utopia',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Ubuntu:300,400,700`
        ]
      }
    }
  ],
}
