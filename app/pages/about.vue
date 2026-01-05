<script setup lang="ts">
const { data: about } = await useAsyncData('about', () => {
  return queryCollection('about').first();
});

if (!about.value) {
  throw createError({ statusCode: 404, statusMessage: 'About content not found' });
}

useSeoMeta({
  title: '關於',
  description: '介紹我的背景與經歷。'
});
</script>

<template>
  <main class="max-w-2xl mx-auto space-y-12">
    <section class="space-y-4">
      <h1
        class="block text-2xl font-semibold"
        href="#about"
      >
        關於
      </h1>

      <ContentRenderer
        v-if="about"
        :value="about"
        class="space-y-3 leading-8"
      />
    </section>

    <ExperienceTimeline />

    <ContactSection />
  </main>
</template>
