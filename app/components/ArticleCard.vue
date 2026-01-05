<script setup lang="ts">
defineProps<{
  slug: string
  title: string
  date: string
}>();

</script>

<template>
  <NuxtLink
    :to="`/articles/${slug}`"
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
