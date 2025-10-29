// Simple RSS feed without gray-matter dependency for serverless compatibility
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
const baseUrl = config.public.siteUrl || 'https://pradyumnachippigiri.dev'


  // Hardcoded sample RSS for testing - replace with actual content later
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Pradyumna Chippigiri</title>
    <description>Personal site of Pradyumna Chippigiri</description>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/api/feed/rss-simple.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>pchippigiri@gmail.com (Pradyumna Chippigiri)</managingEditor>
    <webMaster>pchippigiria@gmail.com (Pradyumna Chippigiri)</webMaster>
    <item>
      <title>Test RSS Feed</title>
      <description>This is a test RSS feed to verify serverless deployment works</description>
      <link>${baseUrl}/test</link>
      <guid>${baseUrl}/test</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <author>pchippigiri@gmail.com (Pradyumna Chippigiri)</author>
    </item>
  </channel>
</rss>`

  // Set proper headers and return RSS XML
  setHeader(event, 'content-type', 'application/rss+xml; charset=UTF-8')
  setHeader(event, 'cache-control', 's-maxage=86400') // Cache for 24 hours

  return rssXml
})