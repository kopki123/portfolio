<script setup lang="ts">
defineProps<{
  slug: string
  title: string
  date: string
}>();

const localePath = useLocalePath();
</script>

<template>
  <NuxtLink
    :to="localePath(`/articles/${slug}`)"
    class="space-y-2 hover:cursor-pointer"
  >
    <p class="font-semibold">
      {{ title }}
    </p>

    <p class="text-xs text-gray-500">
      {{ formatDate(date) }}
    </p>
  </NuxtLink>
</template>
