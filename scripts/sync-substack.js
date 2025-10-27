// scripts/sync-substack.js
import { exec } from 'child_process'
import { promisify } from 'util'

const run = promisify(exec)

export default async function syncSubstack() {
  console.log('🚀 Starting Substack Sync...')
  try {
    console.log('\n📦 Step 1: Fetching Substack posts as Markdown...')
    await run('node scripts/fetch-substack-to-md.js', { stdio: 'inherit' })

    console.log('\n📰 Step 2: Regenerating RSS data...')
    await run('node scripts/generate-rss-data.js', { stdio: 'inherit' })

    console.log('\n✅ Substack sync completed — Markdown + RSS ready!')
  } catch (err) {
    console.error('❌ Substack sync failed:', err)
  }
}

syncSubstack()
