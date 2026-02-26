/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://afot.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
    ],
    additionalSitemaps: [
      'https://afot.in/sitemap.xml',
    ],
  },
}
