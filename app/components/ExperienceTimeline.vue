<script setup lang="ts">
type ExperienceItem = {
  company: string
  role: string
  period: string
}

const experiences: ExperienceItem[] = [
  {
    company: '玩藝國際股份有限公司',
    role: '前端工程師',
    period: '2025/09 — 現在'
  },
  {
    company: '小熊科技有限公司',
    role: '前端工程師',
    period: '2025/03 — 2025/09'
  },
  {
    company: '坂和企業有限公司',
    role: '前端工程師',
    period: '2021/12 — 2024/06'
  },
];
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
