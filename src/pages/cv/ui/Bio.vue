<template>
  <Shadow class="fixed print:relative">
    <div
      class="w-[256px] print:w-auto print:grid print:grid-cols-[6rem_1fr] print:gap-4"
    >
      <img
        src="@/shared/assets/bio.png"
        class="block light:hidden"
        alt="Maxim Trofimov"
      />
      <img
        src="@/shared/assets/bio_light.png"
        class="hidden light:block print:w-24 print:h-24 print:object-cover print:object-[top_-10px_left_0]"
        alt="Maxim Trofimov"
      />

      <div>
        <div
          class="text-[2.1rem] font-semibold mt-6 tracking-[0.01rem] print:mt-0 print:text-2xl print:leading-7"
        >
          Максим Трофимов
        </div>
        <div class="text-lg print:text-base mb-4 print:mb-1">
          FrontEnd Senior/TechLead
        </div>
        <p class="mb-4 print:mb-0">
          Занимаюсь коммерческой разработкой веб-приложений с 2016 года.
        </p>
        <p class="mb-1 mt-0 hidden print:block">27 лет. Кемерово (UTC+7)</p>
      </div>

      <button
        class="text-sky-500 hover:text-sky-700 transition-colors cursor-pointer mx-auto print:hidden"
        @click="emit('toggleHrMode')"
      >
        >> Перейти в режим для {{ props.hrMode ? 'IT' : 'HR' }}
      </button>

      <button
        v-if="props.hrMode"
        class="text-sky-500 hover:text-sky-700 transition-colors cursor-pointer mx-auto print:hidden"
        @click="printCV"
      >
        >> Распечатать/Скачать
      </button>
    </div>
    <Divider class="!hidden mt-3 print:!block" />
  </Shadow>
</template>

<script lang="ts" setup>
  import Divider from '~/shared/ui/Divider.vue';

  const props = defineProps<{
    hrMode?: boolean;
  }>();

  const emit = defineEmits(['toggleHrMode']);

  const printCV = () => {
    window.print();
  };
</script>
