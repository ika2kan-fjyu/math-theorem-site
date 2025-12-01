<script setup lang="ts">
const route = useRoute()

// ルートのパス（例: /basics/distribution-definition）をキーにして記事を1件取得
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<template>
  <main>
    <!-- 記事が見つかったとき -->
    <article v-if="page">
      <h1>{{ page.title }}</h1>
      <!-- Markdown本文をいい感じにレンダリング -->
      <ContentRenderer :value="page" />
    </article>

    <!-- パスに対応する記事がなかったとき -->
    <p v-else>このパスに対応するコンテンツが見つかりませんでした。</p>
  </main>
</template>
