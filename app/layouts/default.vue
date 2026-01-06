<script setup lang="ts">
import AppNavbar from '~/components/layout/AppNavbar.vue';
import AppFooter from '~/components/layout/AppFooter.vue';
import BackToTopButton from '~/components/layout/BackToTopButton.vue';
import portfolioUrl from '~/assets/images/portfolio.webp';

const { data: homeMeta } = await useAsyncData('home-meta', () => {
  return queryCollection('home')
    .select('title', 'description')
    .first();
});

const title = computed(() => homeMeta.value?.title || 'Portfolio');
const description = computed(() => homeMeta.value?.description || '');

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: portfolioUrl,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: portfolioUrl,
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppNavbar />

    <div class="flex-1 max-w-2xl w-full mx-auto mt-26 px-4">
      <slot />
    </div>

    <AppFooter />
    <BackToTopButton />
  </div>
</template>
