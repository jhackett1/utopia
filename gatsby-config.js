module.exports = {
  siteMetadata: {
    title: 'Utopia',
    description: 'The next fast stream conference',
    siteUrl: "http://utopia2019.com"
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-91311733-8",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Utopia`,
        short_name: `Utopia`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1dcbda`,
        display: `minimal-ui`,
        icon: `src/components/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-intercom-spa',
      options: {
        app_id: "looo03ny"
      }
    },
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/events`,
        name: "events",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/speakers`,
        name: "speakers",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-remark-external-links`
  ],
}
