export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],
  css: ['katex/dist/katex.min.css'],
  content: {
    // v3 では build.markdown の下に書くのが推奨
    build: {
      markdown: {
        // remark プラグイン
        // → 数式 ($ ... $, $$ ... $$) をパース
        remarkPlugins: {
          'remark-math': {},
        },
        // rehype プラグイン
        // → パースした数式ノードを KaTeX で HTML/CSS 化
        rehypePlugins: {
          'rehype-katex': {},
        },
      },
    },
  },
})
