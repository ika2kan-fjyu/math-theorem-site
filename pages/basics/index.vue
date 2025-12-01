<template>
  <main>
    <h1>基礎事項（定義など）の一覧</h1>

    <ul>
      <li v-for="article in basics" :key="article.id">
        <NuxtLink :to="article.path">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
const { data: basics } = await useAsyncData('basics', () =>
  // basics コレクションの全件取得
  queryCollection('basics').all()
)
</script>
