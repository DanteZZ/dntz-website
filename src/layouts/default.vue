<template>
  <div class="flex items-center flex-col pt-8 print:pt-0">
    <template v-if="route.name !== 'home'">
      <RouterLink
        :to="{ name: 'home' }"
        class="fixed top-3 left-3 text-sky-500 hover:text-sky-700 transition-colors cursor-pointer print:hidden"
        ><< На главную</RouterLink
      >
      <div class="fixed top-3 right-3 flex gap-3">
        <RouterLink
          v-if="before.length > 1"
          :to="before[before.length - 1]"
          class="text-sky-500 hover:text-sky-700 transition-colors cursor-pointer print:hidden"
          ><<
          {{
            before[before.length - 1]?.meta?.name ||
            before[before.length - 1]?.name
          }}</RouterLink
        >
        <span v-if="before.length > 1 && after[0]" class="text-gray-500"
          >|</span
        >
        <RouterLink
          v-if="after[0]"
          :to="after[0]"
          class="text-sky-500 hover:text-sky-700 transition-colors cursor-pointer print:hidden"
          >{{ after[0]?.meta?.name || after[0]?.name }} >></RouterLink
        >
      </div>
    </template>
    <div class="w-full max-w-6xl">
      <slot />
    </div>
    <span class="text-gray-400 mt-24 md:mt-48 print:hidden"
      >Powered by Maxim Trofimov © 2025</span
    >
  </div>
</template>
<script lang="ts" setup>
  import { RouterLink, useRoute } from 'vue-router';
  import { useNeighborRoutes } from '~/shared/composables';

  const route = useRoute();

  const { before, after } = useNeighborRoutes();
</script>
