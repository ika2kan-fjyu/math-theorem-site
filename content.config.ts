// content.config.ts
import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // 全記事をまとめて扱う共通コレクション
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
    }),
    basics: defineCollection({
      type: 'page',
      source: 'basics/*.md',
    }),
    distributions: defineCollection({
      type: 'page',
      source: 'distributions/*.md',
    }),
  },
})
