<template>
  <Shadow class="px-3 pt-3 lg:pt-0">
    <Heading class="text-3xl !text-gray-300 light:!text-gray-700 mb-5">
      Pet-проекты
    </Heading>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Pet v-for="pet in pets" v-bind="pet" />
    </div>
  </Shadow>
</template>
<script lang="ts" setup>
  import { useHead } from '#app';

  import Heading from '~/shared/ui/Heading.vue';
  import Shadow from '~/shared/ui/Shadow.vue';
  import Pet from './ui/Pet.vue';
  import { pets } from '~/shared/data/pets';

  useHead({
    title: 'DNTZ - Pet-проекты',
  });
</script>
