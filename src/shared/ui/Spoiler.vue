<template>
  <div>
    <div
      class="overflow-hidden relative"
      :class="{
        'cursor-pointer': props.full && !opened && !props.alwaysOpened,
        '!max-h-max': props.alwaysOpened,
      }"
      :style="{
        transition: '.2s',
        maxHeight,
      }"
      ref="container"
      @click="
        () => {
          if (props.full && !opened && !props.alwaysOpened) onToggle();
        }
      "
    >
      <slot />

      <div
        v-if="!opened && !props.alwaysOpened"
        class="absolute bottom-0 left-0 h-12 bg-gradient-to-b from-transparent to-(--background-global) w-full"
      ></div>
    </div>

    <Divider
      v-if="!props.alwaysOpened"
      :double="props.double"
      :none="props.none"
    >
      <button @click="onToggle" class="outline-0 text-gray-500 cursor-pointer">
        [ {{ opened ? 'Свернуть' : 'Развернуть' }} ]
      </button>
    </Divider>
    <Divider v-else :double="props.double" :none="props.none" />
  </div>
</template>
<script setup lang="ts">
  import { ref, watch } from 'vue';
  import Divider from './Divider.vue';
  const props = withDefaults(
    defineProps<{
      height?: number;
      alwaysOpened?: boolean;
      full?: boolean;
      double?: boolean;
      none?: boolean;
    }>(),
    {
      height: 200,
    }
  );
  const emit = defineEmits(['toggle']);
  const container = ref();
  const opened = ref<boolean>(false);

  const maxHeight = ref<string>(`${props.height}px`);

  const onToggle = () => {
    opened.value = !opened.value;
    emit('toggle', opened.value);
  };

  watch(
    () => [
      props.height,
      props.alwaysOpened,
      opened.value,
      container?.value?.scrollHeight,
    ],
    () => {
      if (props.alwaysOpened) {
        opened.value = false;
      }
      maxHeight.value = !props.alwaysOpened
        ? opened?.value
          ? container?.value?.scrollHeight + 'px'
          : props.height + 'px'
        : 'auto';
    }
  );

  defineExpose({
    opened,
  });
</script>
