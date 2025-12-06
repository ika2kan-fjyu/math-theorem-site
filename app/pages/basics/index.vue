<template>
  <main class="min-h-screen bg-gray-50">
    <section class="max-w-4xl mx-auto px-4 py-8 space-y-4">
      <h1 class="text-2xl font-bold mb-4">基礎事項（定義など）の一覧</h1>

      <ul class="space-y-3">
        <li
          v-for="article in basics"
          :key="article.id"
          class="border rounded-lg p-3 hover:bg-gray-50 transition"
        >
          <NuxtLink :to="article.path" class="text-lg font-semibold text-blue-600 hover:underline">
            {{ article.title }}
          </NuxtLink>

          <!-- ここを修正 -->
          <div class="text-sm text-gray-600 mt-1 flex flex-wrap gap-2">
            <!-- level は meta.level から読む -->
            <span
              v-if="article.meta?.level"
              class="px-2 py-0.5 bg-gray-100 rounded-full"
            >
              {{ article.meta.level }}
            </span>

            <!-- field は配列を想定（なければ空配列） -->
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
const { data: basics } = await useAsyncData('basics', () =>
  queryCollection('basics').all()
)
</script>
