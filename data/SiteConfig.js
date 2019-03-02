module.exports = {
  siteTitle: "OpenSTEMKids", // Site title.
  siteTitleShort: "OpenSTEMKids", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "OpenSTEMKids Science Technology Engineering Math for kids education", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://www.openstemkids.com", // Domain of your website without pathPrefix.
  pathPrefix: "/openstem.com-gatsby-material-UI", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Science Technology Engineering Math for kids", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteGATrackingID: "UA-131102334-1", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname. #openstemkids 
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "OpenSTEMKids", // Username to display in the author segment.
  userTwitter: "StemOpen", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Dublin, Ireland", // User location to display in the author segment.
  userAvatar: "/logos/logo-1024.png", // User avatar to display in the author segment.
  userDescription:
    "An engineer and his kids who love to play with Science Technology Engineering Math ... and Art and Robots", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    //{
    //  label: "GitHub",
    //  url: "https://github.com/Crashedmind",
    //  iconClassName: "fa fa-github"
    // },
    {
      label: "Youtube",
      url: "https://www.youtube.com/channel/UClT-YU-Yl_3to7yXAHEeuqA",
      iconClassName: "fa fa-youtube"
    },
    {
      label: "Email",
      url: "mailto:crashedmind@gmail.com",
      iconClassName: "fa fa-envelope"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/STEMOpen",
      iconClassName: "fa fa-twitter"
    }
  ],
  copyright: "Copyright © 2018. OpenSTEMKids" // Copyright string for the footer of the website and RSS feed.
};
