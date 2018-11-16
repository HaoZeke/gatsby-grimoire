module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: 'Gatsby Orga Starter',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // Generic
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    // Org Mode Files
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `org`,
        path: `${__dirname}/content/org/`,
      },
    },
      // Markdown Files
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md`,
        path: `${__dirname}/content/md/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-orga`,
      options: {
        // if you don't want to have server side prism code highlight
        // noHighlight: true,
      },
    }
  ],
};
