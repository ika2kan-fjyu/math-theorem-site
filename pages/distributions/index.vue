<template>
  <main>
    <h1>分布の一覧</h1>

    <ul>
      <li v-for="article in distributions" :key="article.id">
        <NuxtLink :to="article.path">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
const { data: distributions } = await useAsyncData('distributions', () =>
  queryCollection('distributions').all()
)
</script>
