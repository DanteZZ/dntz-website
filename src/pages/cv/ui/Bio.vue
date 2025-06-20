<template>
  <Shadow class="relative lg:fixed">
    <div
      class="grid grid-cols-[8rem_1fr] gap-4 lg:w-[256px] lg:block print:grid-cols-[6rem_1fr]"
    >
      <img
        src="@/shared/assets/bio.png"
        class="block light:hidden lg:w-auto lg:h-auto object-cover print:object-[top_-10px_left_0] lg:!object-center"
        alt="Maxim Trofimov"
      />
      <img
        src="@/shared/assets/bio_light.png"
        class="hidden light:block lg:(w-auto,h-auto) object-cover print:w-24 print:h-24 print:object-[top_-10px_left_0]"
        alt="Maxim Trofimov"
      />

      <div>
        <div
          class="mt-2 mb-1 md:mb-0 text-2xl leading-7 md:text-[2.1rem] md:leading-normal font-semibold lg:mt-6 tracking-[0.01rem] print:mt-0"
        >
          Максим Трофимов
        </div>
        <div
          class="mb-1 text-base md:text-lg print:text-base md:mb-4 print:mb-1"
        >
          FrontEnd Senior/TechLead
        </div>
        <p
          v-if="$viewport.isGreaterOrEquals('xs')"
          class="sm:block mb-4 print:mb-0"
        >
          Занимаюсь коммерческой разработкой веб-приложений с 2016 года.
        </p>
        <p class="mb-1 mt-0 hidden print:block">27 лет. Кемерово (UTC+7)</p>

        <button
          class="block text-left text-sky-500 hover:text-sky-700 transition-colors cursor-pointer print:hidden"
          @click="emit('toggleHrMode')"
        >
          >> Перейти в режим для {{ props.hrMode ? 'IT' : 'HR' }}
        </button>

        <button
          v-if="props.hrMode"
          class="block text-left text-sky-500 hover:text-sky-700 transition-colors cursor-pointer print:hidden"
          @click="printCV"
        >
          >> Распечатать/Скачать
        </button>
      </div>
    </div>
    <Divider class="lg:!hidden mt-3" />
  </Shadow>
</template>

<script lang="ts" setup>
  import Divider from '~/shared/ui/Divider.vue';
  import Shadow from '~/shared/ui/Shadow.vue';

  const props = defineProps<{
    hrMode?: boolean;
  }>();

  const emit = defineEmits(['toggleHrMode']);

  const printCV = () => {
    window.print();
  };
</script>
