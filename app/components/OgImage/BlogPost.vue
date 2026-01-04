<script setup lang="ts">
withDefaults(defineProps<{
  title?: string,
  url?: string
}>(), {
  title: 'portfolio',
  url: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
})

</script>

<template>
  <div class="w-full h-full flex border-purple-500 border-12">
    <div class="flex items-start justify-start h-full">
      <div class="flex flex-col justify-between w-full h-full">
        <h1 class="text-4xl p-20 font-black">
          portfolio
          {{ title }}
        </h1>
        <p class="text-2xl pb-10 px-20 font-bold mb-0">
          {{ url }}
        </p>
      </div>
    </div>
  </div>
</template>


