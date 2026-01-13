<script setup lang="ts">
const { t } = useI18n();
const { data: articles } = await useAsyncData('articles', () => {
  return queryCollection('articles')
    .select('title', 'description', 'date', 'tags', 'slug')
    .order('date', 'DESC')
    .all();
});
</script>

<template>
  <main class="max-w-2xl mx-auto space-y-8">
    <div class="space-y-2">
      <h1 class="text-2xl font-semibold">
        {{ t('articles.title') }}
      </h1>

      <p class="text-gray-500 text-sm">
        {{ t('articles.description') }}
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
