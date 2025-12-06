<template>
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
</template>