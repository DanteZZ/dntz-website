<template>
  <Shadow class="flex flex-col items-center pt-32 lg:text-lg">
    <Banner class="mb-18 text-base sm:text-2xl" />
    <Menu class="text-sm sm:text-lg" />
  </Shadow>
</template>
<script lang="ts" setup>
  import { useHead } from '#app';

  import Banner from './ui/Banner.vue';
  import Menu from './ui/Menu.vue';
  import Shadow from '~/shared/ui/Shadow.vue';

  useHead({
    title: 'DNTZ - Главная',
  });
</script>
