<template>
  <main class="max-w-3xl mx-auto p-4">
    <article v-if="page" class="prose max-w-none">
      <h1>{{ page.title }}</h1>
      <ContentRenderer :value="page" />
    </article>

    <p v-else>このパスに対応するコンテンツが見つかりませんでした。</p>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('content').path(route.path).first()
)
</script>
