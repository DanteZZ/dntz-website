<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup>
  import { useHead } from '#app';
  import { useTheme } from './shared/composables';

  const { isLight } = useTheme();

  useHead({
    htmlAttrs: {
      class: {
        light: isLight,
      },
    },
  });
</script>
