<script setup lang="ts">
const { t } = useI18n();
const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('projects')
    .select('path', 'title', 'description', 'cover', 'tags', 'period', 'slug', 'github', 'demo', 'date')
    .order('date', 'DESC')
    .all();
});
</script>

<template>
  <main class="max-w-2xl mx-auto space-y-8">
    <div class="space-y-2">
      <h1 class="text-2xl font-semibold">
        {{ t('projects.title') }}
      </h1>

      <p class="text-gray-500 text-sm">
        {{ t('projects.description') }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectCard
        v-for="project in projects"
        :key="project.slug"
        v-bind="project"
      />
    </div>
  </main>
</template>
