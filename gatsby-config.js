const path = require('path');
module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: "hzNull Notes",
    desc: "A collection of Rohit Goswami's (HaoZeke) notes and thoughts",
    siteUrl: "https://hznull.netlify.com",
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
    // SEO Stuff
    `gatsby-plugin-sitemap`,
    // Analytics
        {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-109503488-9",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: false,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        optimizeId: "GTM-WK72R74",
        // Any additional create only fields (optional)
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        alwaysSendReferrer: true,
        // cookieDomain: "example.com",
      },
        },
    {
      resolve: "gatsby-plugin-tags",
      options: {
        templatePath: `${__dirname}/src/templates/tags.js`
      }
    },
// make sure to put last in the array
  {
    resolve: `gatsby-plugin-netlify`,
    options: {
      headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
      allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
      mergeSecurityHeaders: true, // boolean to turn off the default security headers
      mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
      mergeCachingHeaders: true, // boolean to turn off the default caching headers
      transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
      generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
    },
  },
  ],
};
