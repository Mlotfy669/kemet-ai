/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://example.com",
  generateRobotsTxt: true,
  exclude: ["/api/*"],
  alternateRefs: [
    {
      href: process.env.SITE_URL || "https://example.com",
      hreflang: "en",
    },
    {
      href: `${process.env.SITE_URL || "https://example.com"}/ar`,
      hreflang: "ar",
    },
  ],
};
