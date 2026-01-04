<script setup lang="ts">
import AppNavbar from '~/components/AppNavbar.vue';
import AppFooter from '~/components/AppFooter.vue';
import BackToTopButton from '~/components/BackToTopButton.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppNavbar />

    <div class="flex-1 max-w-2xl w-full mx-auto mt-26 px-4">
      <slot />
    </div>

    <AppFooter />
    <BackToTopButton />
  </div>
</template>
