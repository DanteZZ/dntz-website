<template>
  <div class="flex items-center flex-col pt-12 print:pt-0">
    <div
      v-if="route.name !== 'home'"
      class="z-50 fixed top-0 left-0 bg-(--background-global)/50 backdrop-blur-md w-full p-3 whitespace-nowrap"
    >
      <Shadow class="flex justify-between drop-shadow-md/90">
        <RouterLink
          :to="{ name: 'home' }"
          class="text-sky-500 hover:text-sky-700 transition-colors cursor-pointer print:hidden"
        >
          << На главную
        </RouterLink>
        <div class="flex gap-3">
          <RouterLink
            v-if="before.length > 1"
            :to="before[before.length - 1]"
            class="hidden sm:inline text-sky-500 hover:text-sky-700 transition-colors cursor-pointer print:hidden"
          >
            <<
            {{
              before[before.length - 1]?.meta?.name ||
              before[before.length - 1]?.name
            }}
          </RouterLink>
          <span
            v-if="before.length > 1 && after[0]"
            class="hidden sm:inline text-gray-500"
            >|</span
          >
          <RouterLink
            v-if="after[0]"
            :to="after[0]"
            class="text-sky-500 hover:text-sky-700 transition-colors cursor-pointer print:hidden"
            >{{ after[0]?.meta?.name || after[0]?.name }} >></RouterLink
          >
        </div>
      </Shadow>
    </div>
    <div class="w-full max-w-6xl">
      <slot />
    </div>
    <span class="text-gray-400 mt-24 mb-6 md:mt-48 print:hidden"
      >Powered by Maxim Trofimov © 2025</span
    >
  </div>
</template>
<script lang="ts" setup>
  import { RouterLink, useRoute } from 'vue-router';
  import { useNeighborRoutes } from '~/shared/composables';
  import Shadow from '~/shared/ui/Shadow.vue';

  const route = useRoute();

  const { before, after } = useNeighborRoutes();
</script>
