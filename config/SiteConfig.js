module.exports = {
  siteTitle: "hzNull Notes", // Site title.
  siteTitleShort: "hzNull", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "HaoZeke's Null Notes", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://hznull.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A collection of Rohit Goswami's (HaoZeke) notes and thoughts.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  // siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-109503488-9", // GA tracking ID.
  googleOptimizeID: "GTM-WK72R74", // Google Optimize ID.
  // disqusShortname: "", // Disqus shortname.
  // postDefaultCategoryID: "", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD MMMM, YYYY", // Date format for display.
  userName: "Rohit Goswami", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "IIT Kanpur, India", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription:
    "NAN", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/HaoZeke",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/HaoZeke",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:rohit.goswami@aol.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Rohit Goswami (HaoZeke)", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
