<script setup lang="ts">

const { data: home } = await useAsyncData('contact-socials', () => {
  return queryCollection('home')
    .select('socials')
    .first();
});

const socials = computed(() => home.value?.socials ?? []);
</script>

<template>
  <section class="space-y-4">
    <a
      href="#contact"
      class="block text-2xl font-semibold"
    >
      聯絡方式
    </a>

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
          class="underline"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </section>
</template>
