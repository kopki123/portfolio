<script setup lang="ts">
useHead({
  link: [
    { rel: 'alternate', type: 'application/rss+xml', title: 'RSS', href: '/rss.xml' },
  ],
});

</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
