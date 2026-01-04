<script setup lang="ts">
const { data: articles } = await useAsyncData('articles', () => {
  return queryCollection('articles')
    .select('title', 'description', 'date', 'tags', 'slug')
    .order('date', 'DESC')
    .all();
});

useSeoMeta({
  title: '文章',
  description: '紀錄我的學習、靈感與實作過程。'
});
</script>

<template>
  <main class="max-w-2xl mx-auto space-y-8">
    <div class="space-y-2">
      <h1
        class="text-2xl font-semibold"
        href="#/articles"
      >
        文章
      </h1>

      <p class="text-gray-500 text-sm">
        紀錄我的學習、靈感與實作過程
      </p>
    </div>

    <div class="grid grid-cols-1 gap-6">
      <ArticleCard
        v-for="article in articles"
        :key="article.slug"
        v-bind="article"
      />
    </div>
  </main>
</template>
