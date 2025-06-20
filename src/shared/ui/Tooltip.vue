<template>
  <div class="relative group inline-block">
    <slot />

    <div
      class="pre absolute z-50 bottom-full mb-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-pre"
    >
      <slot name="content">
        {{ text }}
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    text?: string;
  }>();
</script>
