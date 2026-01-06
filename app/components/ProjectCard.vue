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
      <div class="space-y-3">
        <p class="font-semibold">
          {{ title }}
        </p>

        <p class="text-sm text-gray-500">
          {{ description }}
        </p>

        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="(tag, index) in tags"
            :key="index"
            :label="tag"
            color="neutral"
            variant="soft"
          />
        </div>
      </div>
    </UCard>
  </NuxtLink>
</template>
