<template>
  <div class="flex flex-col items-center pt-32 lg:text-lg">
    <Banner class="mb-18 text-base sm:text-2xl" />
    <Menu class="text-sm sm:text-lg" />
  </div>
</template>
<script lang="ts" setup>
  import { useHead } from '#app';

  import Banner from './ui/Banner.vue';
  import Menu from './ui/Menu.vue';

  useHead({
    title: 'DNTZ - Главная',
  });
</script>
