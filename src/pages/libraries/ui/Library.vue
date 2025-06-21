<template>
  <div class="border-3 border-double border-gray-500 p-5 text-center">
    <a :href="props.url" target="_blank">
      <img
        :src="props.logo"
        :alt="props.name"
        class="h-48 max-w-64 object-contain mx-auto mb-3"
      />
      <Heading h="2" class="leading-4 mb-4">{{ props.name }}</Heading>
    </a>
    <Paragraph> {{ props.description }} </Paragraph>
    <Divider v-if="props.links" class="!mb-2" double>[ Ссылки ]</Divider>
    <div v-if="props.links" class="flex gap-3 justify-center flex-wrap">
      <a
        v-if="props.links.github"
        class="text-gray-500 hover:text-sky-700 transition-colors"
        :href="props.links.github"
        target="_blank"
      >
        [
        <span
          class="text-sky-300 light:text-gray-800 hover:text-sky-500 transition-colors"
        >
          GitHub
        </span>
        ]
      </a>
      <a
        v-if="props.links.npm"
        class="text-gray-500 hover:text-red-700 transition-colors"
        :href="props.links.npm"
        target="_blank"
      >
        [
        <span
          class="text-red-300 light:text-gray-800 hover:text-red-500 transition-colors"
        >
          NPM
        </span>
        ]
      </a>
      <a
        v-if="props.links.changelog"
        class="text-gray-500 hover:text-orange-700 transition-colors"
        :href="props.links.changelog"
        target="_blank"
      >
        [
        <span
          class="text-orange-300 light:text-gray-800 hover:text-orange-500 transition-colors"
        >
          ChangeLog
        </span>
        ]
      </a>
      <a
        v-if="props.links.doc"
        class="text-gray-500 hover:text-green-700 transition-colors"
        :href="props.links.doc"
        target="_blank"
      >
        [
        <span
          class="text-green-300 light:text-gray-800 hover:text-green-500 transition-colors"
        >
          Документация
        </span>
        ]
      </a>
    </div>
    <template v-for="links in props.anotherLinks">
      <Divider class="!mb-2 !mt-3" double>{{ links.title }}</Divider>
      <div class="flex gap-3 justify-center flex-wrap">
        <a
          v-for="link in links.links"
          class="text-gray-500 hover:text-sky-700 transition-colors"
          :href="link.url"
          target="_blank"
        >
          [
          <span
            class="text-gray-50 light:text-gray-800 hover:text-sky-500 transition-colors"
          >
            {{ link.title }}
          </span>
          ]
        </a>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
  import type { Library } from '~/shared/data/libraries';
  import Divider from '~/shared/ui/Divider.vue';
  import Heading from '~/shared/ui/Heading.vue';
  import Paragraph from '~/shared/ui/Paragraph.vue';

  const props = defineProps<Library>();
</script>
