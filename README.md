


# Under the Hood
## In the Past
I had previously played with / used various PHP CMSs (WordPress, Drupal, Joomla), easy site creators like Weebly, Wix, and Confluence as a website CMS, and 2 decades ago, some perl scripts to generate content. None of these felt right:
- The constant PHP security updates.
- Separation of concerns - content from rendering.
- Wanting content to be in a Source Code Repository. 
- Need for [Speed](https://developers.google.com/speed/pagespeed/insights/?url=). I like Confluence a LOT in an intranet context - but struggled to like it as a website CMS.
- ProgressiveWebAPP support for a more mobile/native support.

## Now
The site uses a [JAMstack](https://jamstack.org/). A JAMstack is used “a modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.” 

Specifically: 
- [Gatsby-Material-Starter](https://github.com/Vagr9K/gatsby-material-starter) is the starting point:
-- Markup: [Gatsby](https://github.com/gatsbyjs/gatsby/) for ServerSideRendering - with content stored in GitHub. Gatsby is a React-based Static Site Generator - that uses GraphQL to pull data - from GitHub in this case.
-- React-Material-UI: for a standard look and feel
- Hosting is on Netlify - free personal unlimited!
- NetlifyCMS was added for WYSIWIG editing.

