<template>
  <MenuWrapper class="text-gray-600">
    <MenuItem
      v-for="(link, idx) in links"
      :key="link.label"
      :margin="idx + 1 < links.length"
    >
      <NuxtLink :to="link.to" class="hover:text-sky-500 transition-colors"
        >[ {{ link.label }} ]</NuxtLink
      >
    </MenuItem>
  </MenuWrapper>
</template>
<script lang="ts" setup>
  import { NuxtLink } from '#components';
  import { ref } from 'vue';
  import MenuItem from './MenuItem.vue';
  import MenuWrapper from './MenuWrapper.vue';

  const links = ref([
    // { label: 'Обо мне', to: '/about' },
    // { label: 'Мои проекты', to: '/projects' },
    // { label: 'Библиотеки', to: '/libs' },
    { label: 'Curriculum Vitae', to: '/cv' },
  ]);
</script>
