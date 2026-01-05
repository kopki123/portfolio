<script setup lang="ts">
defineProps<{
  slug: string
  title: string
  description: string
  tags: string[]
}>();
</script>

<template>
  <NuxtLink :to="`/projects/${slug}`">
    <UCard class="h-full shadow-md hover:cursor-pointer hover:shadow-primary-300 dark:hover:shadow-primary-300/70">
      <p class="font-semibold">
        {{ title }}
      </p>

      <p class="mt-2 text-sm text-gray-400">
        {{ description }}
      </p>

      <div class="mt-2 flex flex-wrap gap-2">
        <UBadge
          v-for="(tag, index) in tags"
          :key="index"
          :label="tag"
          color="neutral"
          variant="soft"
        />
      </div>
    </UCard>
  </NuxtLink>
</template>
