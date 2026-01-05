
<script setup lang="ts">
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
        my-4 mx-auto
        px-4 py-3
        rounded-full
        shadow-lg shadow-gray-800/15
        bg-white/20 dark:bg-gray-800/30 backdrop-blur ring-1 dark:ring-white/20 ring-gray-900/5
      "
    >
      <div class="flex items-center gap-2">
        <UTooltip
          v-for="item in links"
          :key="item.to"
          :text="item.label"
        >
          <UButton
            as="a"
            :to="item.to"
            :aria-label="item.label"
            :icon="item.icon"
            :color="route.path === item.to ? 'primary' : 'neutral'"
            variant="ghost"
          />
        </UTooltip>
      </div>

      <div class="space-x-2">
        <UButton
          as="a"
          href="/resume.pdf"
          download
          external
          aria-label="Download resume"
          icon="i-heroicons-arrow-down-tray"
          color="neutral"
          variant="ghost"
        />

        <AppColorModeButton />
      </div>
    </nav>
  </div>
</template>
