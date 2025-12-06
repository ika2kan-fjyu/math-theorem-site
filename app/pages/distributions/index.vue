<template>
  <main class="min-h-screen bg-gray-50">
    <header class="bg-white border-b">
      <div class="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <NuxtLink to="/" class="font-bold text-lg">
          分布と統計の学習サイト（仮）
        </NuxtLink>

        <nav class="space-x-4 text-sm">
          <NuxtLink to="/basics" class="hover:underline">基礎</NuxtLink>
          <NuxtLink to="/distributions" class="hover:underline">分布一覧</NuxtLink>
        </nav>
      </div>
    </header>

    <section class="max-w-4xl mx-auto px-4 py-8 space-y-4">
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
    </section>
  </main>
</template>

<script setup lang="ts">
const { data: distributions } = await useAsyncData('distributions', () =>
  queryCollection('distributions').all()
)
</script>
