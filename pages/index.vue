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
      <h1 class="text-3xl font-bold">
        確率分布を中心に学ぶ、統計の学習ノート
      </h1>

      <p class="text-gray-700">
        確率変数の定義から、一様分布・正規分布などの代表的な分布、
        さらに統計検定にもつながる内容を、定理と直感的な解説でまとめていきます。
      </p>

      <div class="flex flex-wrap gap-4">
        <NuxtLink
          to="/basics"
          class="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
        >
          基礎から学ぶ
        </NuxtLink>

        <NuxtLink
          to="/distributions"
          class="px-4 py-2 bg-white border rounded-md text-sm hover:bg-gray-50"
        >
          分布一覧を見る
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
