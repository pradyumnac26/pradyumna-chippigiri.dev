// scripts/fetch-substack-to-md.js
import Parser from 'rss-parser'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { JSDOM } from 'jsdom'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')
const SUBSTACK_FEED = 'https://pradyumnachippigiri.substack.com/feed'

const parser = new Parser()

async function fetchSubstackToMarkdown() {
  console.log('📰 Fetching Substack posts and converting to Markdown...')
  const feed = await parser.parseURL(SUBSTACK_FEED)
  await mkdir(BLOG_DIR, { recursive: true })

  for (const item of feed.items) {
    const slug = item.link.split('/').filter(Boolean).pop()
    const date = new Date(item.isoDate).toISOString()
    const year = new Date(item.isoDate).getFullYear() 

    // 🧹 Clean content using a DOM parser
    let content = item['content:encoded'] || item.content || ''
    const dom = new JSDOM(content)
    const document = dom.window.document

    // remove all subscription widgets, forms, and empty divs
    document.querySelectorAll(
      '.subscription-widget, .subscription-widget-wrap-editor, form.subscription-widget-subscribe, form[action*="substack.com"], script, iframe'
    ).forEach(el => el.remove())

    content = document.body.innerHTML.trim()

    const description = item.contentSnippet || 'No description available.'
    const frontmatter = `---
title: "${item.title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
author: "Pradyumna"
date: "${date}"
published: true
slug: "${slug}"
tags: []
---

${content}
`
const yearDir = path.join(BLOG_DIR, String(year))
    await mkdir(yearDir, { recursive: true })

    const filePath = path.join(yearDir, `${slug}.md`)
    await writeFile(filePath, frontmatter)
    console.log(`✅ Created: ${year}/${slug}.md`)
  }

  console.log(`✨ Done! Imported ${feed.items.length} Substack posts.`)
}

fetchSubstackToMarkdown().catch(console.error)
