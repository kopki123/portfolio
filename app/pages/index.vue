<script setup lang="ts">
const { data: home } = await useAsyncData('home', () => {
  return queryCollection('home').first();
});

const { data: projects } = await useAsyncData('home-projects', () => {
  return queryCollection('projects')
    .select('path', 'title', 'description', 'cover', 'tags', 'period', 'slug', 'github', 'demo', 'date')
    .order('date', 'DESC')
    .all();
});

const { data: articles } = await useAsyncData('home-articles', () => {
  return queryCollection('articles')
    .select('title', 'date', 'slug')
    .order('date', 'DESC')
    .all();
});

const featuredProjects = computed(() => projects.value?.slice(0, 2) ?? []);
const latestArticles = computed(() => articles.value?.slice(0, 3) ?? []);

if (!home.value) {
  throw createError({ statusCode: 404, statusMessage: 'Home content not found' });
}

defineOgImageComponent('BlogPost');
useSeoMeta({
  title: () => home.value?.title ?? '個人網站',
  description: () => home.value?.description ?? ''
});
</script>

<template>
  <main>
    <ContentRenderer
      v-if="home"
      :value="home"
      class="leading-8 space-y-3"
    />

    <div class="flex items-center gap-2 mt-4">
      <UButton
        v-for="(item, index) in home?.socials"
        :key="index"
        :label="item?.label"
        :icon="item?.icon"
        :href="item?.url"
        size="sm"
        variant="ghost"
        color="neutral"
        as="a"
        :aria-label="item?.label"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>

    <section
      v-if="featuredProjects.length"
      class="mt-10 space-y-4"
    >
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-semibold">
          專案
        </h2>
        <UButton
          aria-label="查看全部專案"
          to="/projects"
          label="查看全部"
          icon="i-heroicons-arrow-right"
          variant="link"
          color="neutral"
          size="sm"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.slug"
          v-bind="project"
        />
      </div>
    </section>

    <section
      v-if="latestArticles.length"
      class="mt-10 space-y-4"
    >
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-semibold">
          文章
        </h2>
        <UButton
          aria-label="查看全部文章"
          to="/articles"
          label="查看全部"
          icon="i-heroicons-arrow-right"
          variant="link"
          color="neutral"
          size="sm"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ArticleCard
          v-for="article in latestArticles"
          :key="article.slug"
          v-bind="article"
        />
      </div>
    </section>
  </main>
</template>
