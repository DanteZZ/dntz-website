<template>
  <div class="border-3 border-double border-gray-500 p-5 text-center">
    <a :href="props.url" target="_blank">
      <img
        :src="props.logo"
        :alt="props.name"
        class="h-42 m-3 object-contain mx-auto mb-8"
      />
      <Heading h="2" class="leading-4 mb-4">{{ props.name }}</Heading>
    </a>

    <Paragraph> <div v-html="props.description" /> </Paragraph>
    <Divider class="!mb-2" double>[ Стек ]</Divider>
    <div class="flex justify-center flex-wrap gap-1">
      <span v-for="item in props.stack" class="text-nowrap text-gray-500">
        {{ '{' }}
        <span
          class="text-gray-50 light:text-gray-800 hover:text-sky-500 transition-colors"
        >
          {{ item }}
        </span>
        {{ '}' }}
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import type { Pet } from '~/shared/data/pets';
  import Divider from '~/shared/ui/Divider.vue';
  import Heading from '~/shared/ui/Heading.vue';
  import Paragraph from '~/shared/ui/Paragraph.vue';

  const props = defineProps<Pet>();
</script>
