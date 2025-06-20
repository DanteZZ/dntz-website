<template>
  <div class="w-full flex justify-between">
    <span>║</span>
    <div class="text-gray-50 light:text-gray-900">
      <slot />
    </div>

    <span>║</span>
  </div>
  <div v-if="props.margin" class="w-full flex justify-between">
    <span>║</span>
    <span>║</span>
  </div>
</template>
<script lang="ts" setup>
  const props = defineProps<{
    margin?: boolean;
  }>();
</script>
