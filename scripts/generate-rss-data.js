// scripts/generate-rss-data.js
import RSSParser from 'rss-parser'
import { writeFile } from 'fs/promises'
import { join } from 'path'

async function generateRSSData() {
  try {
    const SUBSTACK_FEED_URL = 'https://pradyumnachippigiri.substack.com/feed'
    const parser = new RSSParser()
    const feed = await parser.parseURL(SUBSTACK_FEED_URL)

    const posts = feed.items.map((item) => {
      const slug = item.link?.split('/').pop()?.replace(/\/$/, '') || ''
      return {
        title: item.title,
        description: item.contentSnippet || '',
        date: new Date(item.pubDate).toISOString(),
        author: item.creator || 'Pradyumna Chippigiri',
        _path: `/blog/${slug}`,
        slug,
        tags: item.categories || []
      }
    })

    // Sort newest first and limit
    const sortedPosts = posts
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 50)

    // Write to data.ts
    const tsOutputPath = join(process.cwd(), 'server/api/feed/data.ts')
    const tsContent = `// Auto-generated from Substack RSS feed — do not edit manually
export const rssData = ${JSON.stringify(sortedPosts, null, 2)} as const
`
    await writeFile(tsOutputPath, tsContent)
    console.log(`✅ Generated RSS data from Substack (${sortedPosts.length} posts)`)
    return sortedPosts
  } catch (error) {
    console.error('❌ Error generating RSS data:', error)
    return []
  }
}

// Run directly if executed manually
if (import.meta.url === `file://${process.argv[1]}`) {
  generateRSSData()
}

export { generateRSSData }
