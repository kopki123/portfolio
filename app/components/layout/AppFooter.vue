<script setup lang="ts">
const currentYear = new Date().getFullYear();

const { data: home } = await useAsyncData('footer-socials', () => {
  return queryCollection('home')
    .select('socials')
    .first();
});

const socials = computed(() => {
  const baseSocials = home.value?.socials ?? [];

  return [
    ...baseSocials,
    {
      label: 'RSS',
      icon: 'i-simple-icons-rss',
      url: '/rss.xml',
    },
  ];
});
</script>

<template>
  <footer class="flex items-center justify-between max-w-2xl w-full mx-auto mt-12 mb-6 px-4">
    <p class="text-sm text-gray-500">
      © {{ currentYear }}. All rights reserved.
    </p>

    <div class="flex gap-2">
      <UButton
        v-for="(item, index) in socials"
        :key="index"
        :icon="item.icon"
        size="sm"
        variant="link"
        color="neutral"
        as="a"
        :href="item.url"
        :aria-label="item.label"
        external
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  </footer>
</template>
