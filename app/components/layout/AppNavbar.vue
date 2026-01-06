
<script setup lang="ts">
import AppColorModeButton from './AppColorModeButton.vue';

const route = useRoute();

const links = [
  { label: '首頁', to: '/', icon: 'i-heroicons-home' },
  { label: '關於', to: '/about', icon: 'i-heroicons-user' },
  { label: '專案', to: '/projects', icon: 'i-heroicons-folder' },
  { label: '文章', to: '/articles', icon: 'i-heroicons-document-text' },
];
</script>

<template>
  <div class="z-50 fixed top-0 w-full px-4">
    <nav
      class="
        flex items-center justify-between
        max-w-md
        mx-auto my-4
        px-4 py-2
        rounded-full
        shadow-lg shadow-gray-800/20
        backdrop-blur ring-1 ring-gray-900/5 dark:ring-white/20
      "
    >
      <div class="flex items-center gap-2">
        <UTooltip
          v-for="item in links"
          :key="item.to"
          :text="item.label"
        >
          <UButton
            :to="item.to"
            :icon="item.icon"
            :color="route.path === item.to ? 'primary' : 'neutral'"
            as="a"
            :aria-label="item.label"
            variant="ghost"
          />
        </UTooltip>
      </div>

      <div class="space-x-2">
        <AppColorModeButton />
      </div>
    </nav>
  </div>
</template>
