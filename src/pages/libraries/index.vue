<template>
  <Shadow class="px-3 pt-3 lg:pt-0">
    <Heading class="text-3xl !text-gray-300 light:!text-gray-700 mb-5">
      Библиотеки
    </Heading>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Library v-for="library in libraries" v-bind="library" />
    </div>
  </Shadow>
</template>
<script lang="ts" setup>
  import { useHead } from '#app';

  import Heading from '~/shared/ui/Heading.vue';
  import Shadow from '~/shared/ui/Shadow.vue';
  import Library from './ui/Library.vue';
  import { libraries } from '~/shared/data/libraries';

  useHead({
    title: 'DNTZ - Библиотеки',
  });
</script>
