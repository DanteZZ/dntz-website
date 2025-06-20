<template>
  <component
    :is="`h${props.h || 1}`"
    class="text-2xl font-semibold text-sky-500 mb-2"
  >
    <slot />
  </component>
</template>
<script setup lang="ts">
  const props = defineProps<{
    h?: number | string;
  }>();
</script>
