<template>
  <main class="max-w-3xl mx-auto p-4 space-y-4">
    <h1 class="text-2xl font-bold mb-4">分布の一覧</h1>

    <ul class="space-y-3">
      <li
        v-for="article in distributions"
        :key="article.id"
        class="border rounded-lg p-3 hover:bg-gray-50 transition"
      >
        <NuxtLink :to="article.path" class="text-lg font-semibold text-blue-600 hover:underline">
          {{ article.title }}
        </NuxtLink>

        <div class="text-sm text-gray-600 mt-1 flex flex-wrap gap-2">
          <span
            v-if="article.meta?.level"
            class="px-2 py-0.5 bg-gray-100 rounded-full"
          >
            {{ article.meta.level }}
          </span>

          <span
            v-for="f in (article.meta?.field || [])"
            :key="f"
            class="px-2 py-0.5 bg-gray-100 rounded-full"
          >
            {{ f }}
          </span>
        </div>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
const { data: distributions } = await useAsyncData('distributions', () =>
  queryCollection('distributions').all()
)
</script>
