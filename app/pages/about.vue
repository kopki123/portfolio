<script setup lang="ts">
const { data: about } = await useAsyncData('about', () => {
  return queryCollection('about').first();
});

const { data: home } = await useAsyncData('contact-socials', () => {
  return queryCollection('home')
    .select('socials')
    .first();
});

if (!about.value) {
  throw createError({ statusCode: 404, statusMessage: 'About content not found' });
}

const socials = computed(() => home.value?.socials ?? []);
</script>

<template>
  <main class="max-w-2xl mx-auto space-y-12">
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">
        關於
      </h2>

      <ContentRenderer
        v-if="about"
        :value="about"
        class="space-y-3 leading-8"
      />
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">
        經歷摘要
      </h2>

            <ul class="space-y-3">
        <li
          v-for="(item, index) in about?.experiences"
          :key="index"
          class="flex flex-wrap items-end justify-between"
        >
          <div class="flex items-end gap-2">
            <p class="font-medium">
              {{ item.company }}
            </p>

            <p class="text-sm text-gray-500">
              {{ item.role }}
            </p>
          </div>

          <span class="text-xs text-gray-500">
            {{ item.period }}
          </span>
        </li>
      </ul>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">
        聯絡方式
      </h2>

      <ul class="space-y-3">
        <li
          v-for="(item, index) in socials"
          :key="index"
          class="list-disc list-inside"
        >
          <a
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="underline underline-offset-4"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </section>
  </main>
</template>
