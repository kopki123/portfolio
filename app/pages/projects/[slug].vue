<script setup lang="ts">
const route = useRoute();
const slug = computed(() => String(route.params.slug));
const path = computed(() => `/projects/${slug.value}`);
const { t } = useI18n();
const localePath = useLocalePath();

const { data: page } = await useAsyncData(path.value, () => {
  return queryCollection('projects').path(path.value).first();
});

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Not Found' });
}
</script>

<template>
  <div class="space-y-6">
    <UButton
      :aria-label="t('projects.back')"
      :to="localePath('/projects')"
      :label="t('projects.back')"
      icon="i-heroicons-arrow-left"
      color="neutral"
      variant="link"
      size="sm"
    />

    <header class="space-y-3">
      <div class="flex items-center">
        <UButton
          :aria-label="page!.title"
          :to="page!.demo"
          :label="t('projects.liveDemo')"
          icon="i-heroicons-link"
          target="_blank"
          color="neutral"
          variant="link"
          size="sm"
        />
        <UButton
          :aria-label="page!.title"
          :to="page!.github"
          :label="t('projects.sourceCode')"
          icon="i-heroicons-code-bracket"
          target="_blank"
          color="neutral"
          variant="link"
          size="sm"
        />
      </div>

      <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <p class="text-xl font-semibold">
          {{ page!.title }}
        </p>
        <p class="text-xs text-gray-500">
          {{ page!.period }}
        </p>
      </div>
    </header>

    <NuxtImg
      :src="page!.cover"
      :alt="page!.title"
      class="w-full rounded-lg border-4 border-gray-200"
      loading="lazy"
    />

    <p class="text-sm">
      {{ page!.description }}
    </p>

    <div class="flex flex-wrap gap-2">
      <UBadge
        v-for="tag in page!.tags"
        :key="tag"
        :label="tag"
        color="neutral"
        variant="soft"
      />
    </div>
  </div>
</template>
