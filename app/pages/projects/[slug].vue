<script setup lang="ts">
const route = useRoute();
const path = computed(() => `/projects/${route.params.slug}`);

const { data: page } = await useAsyncData(path.value, () => {
  return queryCollection('projects').path(path.value).first();
});

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Not Found' });
}

useSeoMeta({
  title: () => `${page.value!.title} | 專案`,
  description: () => page.value!.description || ''
});
</script>

<template>
  <div class="space-y-6">
    <UButton
      to="/projects"
      label="返回專案"
      icon="i-heroicons-arrow-left"
      color="neutral"
      variant="link"
      size="sm"
    />

    <!-- Header -->
    <header class="space-y-3">
      <div class="flex items-center">
        <UButton
          :to="page!.demo"
          label="Live Demo"
          icon="i-heroicons-link"
          target="_blank"
          color="neutral"
          variant="link"
          size="sm"
        />
        <UButton
          :to="page!.github"
          label="Source Code"
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

    <p class="text-sm leading-8">
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
