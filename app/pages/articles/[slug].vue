<script setup lang="ts">
const route = useRoute();
const { t } = useI18n();
const localePath = useLocalePath();
const slug = computed(() => String(route.params.slug));

const { data: page } = await useAsyncData(
  `article-${slug.value}`,
  () => queryCollection('articles').where('slug', slug.value).first()
);

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article Not Found' });
}
</script>

<template>
  <div class="space-y-6">
    <UButton
      :aria-label="t('articles.back')"
      :to="localePath('/articles')"
      :label="t('articles.back')"
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
