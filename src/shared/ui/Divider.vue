<template>
  <div
    class="w-full grid grid-cols-[1fr_auto_1fr] items-center"
    :class="{
      '!block': !$slots.default,
      'mb-4': props.margin,
    }"
  >
    <div
      class="border-t border-dashed w-full border-gray-500 light:border-gray-300"
      :class="{
        '!border-solid !border-y h-[4px]': props.double,
        '!opacity-0': props.none,
      }"
    ></div>
    <template v-if="$slots?.default">
      <div class="px-2 font-medium"><slot /></div>
      <div
        class="border-t border-dashed w-full border-gray-500 light:border-gray-300"
        :class="{
          '!border-solid !border-y h-[4px]': props.double,
          '!opacity-0': props.none,
        }"
      ></div>
    </template>
  </div>
</template>
<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      double?: boolean;
      none?: boolean;
      margin?: boolean;
    }>(),
    {
      margin: true,
    }
  );
</script>
