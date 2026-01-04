<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
}>(), {
  title: 'title',
})
</script>

<template>
  <div class="h-full w-full flex bg-gray-50 border-purple-500 border-12">
    <div class="flex items-start justify-start h-full">
      <div class="flex flex-col justify-between w-full h-full">
        <h1 class="text-[80px] p-20 font-black text-left">
          {{ title }}
        </h1>
        <p class="text-2xl pb-10 px-20 font-bold mb-0">
          mycoolsite.com
        </p>
      </div>
    </div>
  </div>
</template>
