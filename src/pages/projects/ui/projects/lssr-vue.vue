<template>
  <div class="border-3 border-double border-gray-500 p-5 text-center">
    <a href="https://lssr.dntz.xyz/docs/renderers/vue/intro" target="_blank">
      <img
        src="https://lssr.dntz.xyz/assets/images/vue3-dark-f1c542e6162f98532dba043d3bafe7a0.png"
        alt="LiteSSR Vue Renderer"
        class="w-48 h-48 mx-auto mb-3"
      />
      <Heading h="2" class="leading-4">LiteSSR Vue Renderer</Heading>
    </a>
    <Paragraph> Реализация генератора Vue3 для LiteSSR </Paragraph>
    <Divider class="!mb-2" double>[ Ссылки ]</Divider>
    <div class="flex gap-3 justify-center">
      <a
        class="text-gray-500 hover:text-sky-700 transition-colors"
        href="https://github.com/DanteZZ/lite-ssr/tree/main/packages/vue"
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
        class="text-gray-500 hover:text-red-700 transition-colors"
        href="https://www.npmjs.com/package/@lite-ssr/vue"
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
        class="text-gray-500 hover:text-orange-700 transition-colors"
        href="https://github.com/DanteZZ/lite-ssr/blob/main/packages/vue/CHANGELOG.md"
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
        class="text-gray-500 hover:text-green-700 transition-colors"
        href="https://lssr.dntz.xyz/docs/renderers/vue/intro"
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
    <Divider class="!mb-2 !mt-3" double>[ Пакеты/Плагины ]</Divider>
    <div class="flex gap-3 justify-center flex-wrap">
      <a
        class="text-gray-500 hover:text-sky-700 transition-colors"
        href="https://github.com/DanteZZ/lite-ssr/tree/main/packages/vue-unhead"
        target="_blank"
      >
        [
        <span
          class="text-gray-50 light:text-gray-800 hover:text-sky-500 transition-colors"
        >
          @lite-ssr/vue-unhead
        </span>
        ]
      </a>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import Divider from '~/shared/ui/Divider.vue';
  import Heading from '~/shared/ui/Heading.vue';
  import Paragraph from '~/shared/ui/Paragraph.vue';
</script>
