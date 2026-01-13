<script setup lang="ts">
import AppColorModeButton from './AppColorModeButton.vue';

const route = useRoute();
const { t, locale, locales, setLocale } = useI18n();
const localePath = useLocalePath();

const navItems = [
  { key: 'home', path: '/', icon: 'i-heroicons-home' },
  { key: 'about', path: '/about', icon: 'i-heroicons-user' },
  { key: 'projects', path: '/projects', icon: 'i-heroicons-folder' },
  { key: 'articles', path: '/articles', icon: 'i-heroicons-document-text' },
];

const links = computed(() => navItems.map((item) => ({
  ...item,
  label: t(`nav.${item.key}`),
  to: localePath(item.path),
})));

const localeOptions = computed(() => (locales.value || []).map((item) => ({
  code: item.code,
  label: item.name || item.code.toUpperCase(),
})));

const changeLocale = async (code: string) => {
  if (code === locale.value) {
    return;
  }

  await setLocale(code);
};
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

      <div class="flex items-center gap-2">
        <UFieldGroup
          v-if="localeOptions.length"
          size="sm"
          :aria-label="t('common.languageSwitcher')"
          class="hidden sm:inline-flex"
        >
          <UButton
            v-for="option in localeOptions"
            :key="option.code"
            :label="option.label"
            :color="locale === option.code ? 'primary' : 'neutral'"
            variant="ghost"
            @click="changeLocale(option.code)"
          />
        </UFieldGroup>

        <USelectMenu
          v-if="localeOptions.length"
          v-model="locale"
          :options="localeOptions"
          value-attribute="code"
          option-attribute="label"
          size="sm"
          class="sm:hidden"
          :aria-label="t('common.languageSwitcher')"
        />

        <AppColorModeButton />
      </div>
    </nav>
  </div>
</template>
