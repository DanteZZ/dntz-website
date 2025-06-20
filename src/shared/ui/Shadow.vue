<template>
  <div
    class="drop-shadow-lg/45 light:drop-shadow-none"
    :class="{ inline: props.inline }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    inline?: boolean;
  }>();
</script>
