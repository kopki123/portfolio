<script setup lang="ts">
type ExperienceItem = {
  company: string
  role: string
  period: string
}

const { data: about } = await useAsyncData('about-experiences', async () => {
  return queryCollection('about')
    .select('experiences')
    .first();
});

if (!about.value) {
  throw createError({ statusCode: 404, statusMessage: 'About content not found' });
}

const experiences = computed<ExperienceItem[]>(() => about.value?.experiences ?? []);
</script>

<template>
  <section class="space-y-4">
    <a
      href="#experiences"
      class="block text-2xl font-semibold"
    >
      經歷摘要
    </a>

    <ul class="space-y-3">
      <li
        v-for="(item, index) in experiences"
        :key="index"
        class="flex items-end justify-between"
      >
        <div class="flex items-end gap-2">
          <p class="font-medium">
            {{ item.company }}
          </p>

          <p class="text-sm text-gray-500 dark:text-gray-300">
            {{ item.role }}
          </p>
        </div>

        <span class="text-xs text-gray-500">
          {{ item.period }}
        </span>
      </li>
    </ul>
  </section>
</template>
