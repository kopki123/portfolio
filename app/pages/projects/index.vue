<script setup lang="ts">
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
        專案
      </h1>

      <p class="text-gray-500 text-sm">
        以下是我在學習中完成的一些專案
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
