const config = require("./config/SiteConfig");

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: config.siteTitle,
    desc: config.siteDescription,
    siteUrl: config.siteUrl,
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
    },
    // Categorize (maybe kill this with the docs?)
    // https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/
{
      resolve: "gatsby-plugin-categories",
      options: {
        templatePath: `${__dirname}/src/templates/category.js`
      }
    },
        {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID,
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: false,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        optimizeId: config.googleOptimizeID,
        // Any additional create only fields (optional)
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        alwaysSendReferrer: true,
        // cookieDomain: "example.com",
      },
        }
  ],
};
