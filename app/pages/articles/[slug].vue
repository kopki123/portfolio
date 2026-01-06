<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('articles').path(route.path).first();
});

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article Not Found' });
}
</script>

<template>
  <div class="space-y-6">
    <UButton
      aria-label="Back to articles"
      to="/articles"
      label="返回文章"
      icon="i-heroicons-arrow-left"
      color="neutral"
      variant="link"
      size="sm"
    />

    <header class="space-y-3">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <p class="text-2xl font-semibold">
          {{ page!.title }}
        </p>
        <p class="text-xs text-gray-500">
          {{ formatDate(page!.date) }}
        </p>
      </div>
    </header>

    <div class="flex flex-wrap gap-2">
      <UBadge
        v-for="tag in page!.tags"
        :key="tag"
        :label="tag"
        color="neutral"
        variant="soft"
      />
    </div>

    <ContentRenderer
      v-if="page"
      :value="page"
    />
  </div>
</template>
