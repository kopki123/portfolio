<script setup lang="ts">
const isVisible = ref(false);

const updateVisibility = () => {
  isVisible.value = window.scrollY > 100;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  updateVisibility();
  window.addEventListener('scroll', updateVisibility, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateVisibility);
});
</script>

<template>
  <ClientOnly>
    <div
      class="z-50 fixed bottom-6 right-6 transition-all duration-300"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'"
    >
      <UButton
        aria-label="Back to top"
        icon="i-heroicons-arrow-up"
        color="neutral"
        variant="soft"
        @click="scrollToTop"
      />
    </div>
  </ClientOnly>
</template>
