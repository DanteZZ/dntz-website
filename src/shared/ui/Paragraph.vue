<template>
  <p :class="{ 'mb-4': props.margin }">
    <slot />
  </p>
</template>
<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      margin?: boolean;
    }>(),
    {
      margin: true,
    }
  );
</script>
