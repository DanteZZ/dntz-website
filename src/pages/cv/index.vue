<template>
  <div
    class="grid grid-cols-[256px_auto] print:grid-cols-1 gap-16 py-12 print:text-[13px] print:!py-0"
  >
    <Bio
      class="print:hidden"
      :hr-mode="hrMode"
      @toggle-hr-mode="toggleHrMode"
    />
    <div class="print:hidden" />
    <div>
      <Shadow>
        <Heading class="text-3xl !text-gray-300 light:!text-gray-700">
          Curriculum Vitae
        </Heading>
      </Shadow>
      <Divider />

      <Bio
        class="hidden print:block"
        :hr-mode="hrMode"
        @toggle-hr-mode="toggleHrMode"
      />
      <Shadow>
        <Heading h="2" :class="{ '!text-gray-700 print:!text-xl': hrMode }">
          Обо мне
          <span class="text-lg text-gray-500 print:hidden">(кратко)</span>
        </Heading>
        <Paragraph>
          Более 12 лет занимаюсь разработкой, из них 9 лет коммерческой. Работал
          как над небольшими стартапами, так и над масштабируемыми
          распределёнными системами. Имею опыт написания библиотек для NodeJS
          (одинарных/пакетных), SSR / PWA / SPA и мобильных (WebView) приложений
        </Paragraph>
        <Paragraph>
          Берусь за самые нестандартные для рядового FrontEnd разработчика
          кейсы. Периодически реализую экспериментальные pet-проекты, для
          изучения возможностей нестандартного использования web-технологий.
        </Paragraph>
      </Shadow>

      <Divider />

      <Spoiler :always-opened="hrMode">
        <Shadow>
          <Heading h="2" :class="{ '!text-gray-700 print:!text-xl': hrMode }">
            Технологический стек
          </Heading>

          <div class="grid grid-cols-2 gap-12 gap-y-0">
            <div>
              <div v-for="stack in stacks.filter((n, i) => i % 2 === 0)">
                <div
                  class="text-lg font-semibold mb-2 print:!text-base print:mb-0"
                >
                  {{ stack.label }}
                </div>
                <Paragraph class="block">
                  <template v-for="(item, idx) in stack.items">
                    <component
                      :is="item.notion ? Tooltip : 'span'"
                      :text="item.notion"
                    >
                      <a
                        :href="item.link || '#'"
                        target="_blank"
                        class="mr-1 text-gray-500 hover:text-sky-700 transition-colors"
                      >
                        <span
                          v-if="hrMode"
                          class="text-gray-800 hover:text-sky-600 transition-colors"
                        >
                          {{
                            item.label +
                            (idx < stack.items.length - 1 ? ', ' : '')
                          }}
                        </span>
                        <span v-else class="text-nowrap">
                          {{ '{' }}
                          <span
                            class="text-gray-50 light:text-gray-800 hover:text-sky-500 transition-colors"
                          >
                            {{ item.label
                            }}<span v-if="item.notion" class="text-sky-500"
                              >*</span
                            >
                          </span>
                          {{ '}' }}
                        </span>
                      </a>
                    </component>
                  </template>
                </Paragraph>
              </div>
            </div>
            <div>
              <div v-for="stack in stacks.filter((n, i) => i % 2 !== 0)">
                <div
                  class="text-lg font-semibold mb-2 print:!text-base print:mb-0"
                >
                  {{ stack.label }}
                </div>
                <Paragraph class="block">
                  <template v-for="(item, idx) in stack.items">
                    <component
                      :is="item.notion ? Tooltip : 'span'"
                      :text="item.notion"
                    >
                      <a
                        :href="item.link || '#'"
                        target="_blank"
                        class="mr-1 text-gray-500 hover:text-sky-700 transition-colors"
                      >
                        <span
                          v-if="hrMode"
                          class="text-gray-800 hover:text-sky-600 transition-colors"
                        >
                          {{
                            item.label +
                            (idx < stack.items.length - 1 ? ', ' : '')
                          }}
                        </span>
                        <span v-else class="text-nowrap">
                          {{ '{' }}
                          <span
                            class="text-gray-50 light:text-gray-800 hover:text-sky-500 transition-colors"
                          >
                            {{ item.label
                            }}<span v-if="item.notion" class="text-sky-500"
                              >*</span
                            >
                          </span>
                          {{ '}' }}
                        </span>
                      </a>
                    </component>
                  </template>
                </Paragraph>
              </div>
            </div>
          </div>
        </Shadow>
      </Spoiler>
      <Shadow>
        <Heading h="2" :class="{ '!text-gray-700 print:!text-xl': hrMode }">
          Профессиональные навыки
        </Heading>
        <div class="grid grid-cols-2 gap-12 gap-y-0 mb-10">
          <div>
            <div class="text-lg font-semibold leading-8 print:!text-base">
              HardSkills
            </div>
            <p v-for="skill in skills.hard">
              <template v-if="!hrMode">
                [<span class="text-green-400">✓</span>]
              </template>
              <span v-else class="mr-2">•</span>
              {{ skill }}
            </p>
          </div>
          <div>
            <div class="text-lg font-semibold leading-8 print:!text-base">
              SoftSkills
            </div>
            <p v-for="skill in skills.soft" class="relative">
              <template v-if="!hrMode">
                [<span class="text-green-400">✓</span>]
              </template>
              <span v-else class="mr-2">•</span>
              {{ skill }}
            </p>
          </div>
        </div>
      </Shadow>
      <Divider class="break-after-page" />
      <Shadow>
        <Heading h="2" :class="{ '!text-gray-700 print:!text-xl': hrMode }">
          Коммерческие проекты
        </Heading>
        <Paragraph>
          ** - Названия и некоторые детали проектов я не имею права разглашать в
          связи с NDA.
        </Paragraph>
      </Shadow>
      <div
        class="grid grid-cols-2 grid-2 gap-12 gap-y-6"
        :class="{ '!grid-cols-1 !gap-0': hrMode, group: !hrMode }"
      >
        <div
          v-for="(project, idx) in projects"
          class="transition-size break-inside-avoid"
          :class="{
            'col-span-2': openedProject === idx,
          }"
          :style="{
            'grid-row-start':
              openedProject === idx + 1 && openedProject % 2 === 1
                ? Math.ceil(openedProject / 2) + 1
                : 'auto',
          }"
        >
          <Divider double class="!mb-1" :class="{ '!mb-2': hrMode }">
            [ {{ project.period[0] }} - {{ project.period[1] }} ]
          </Divider>
          <Spoiler
            ref="projectSpoilers"
            full
            @toggle="(v) => onToggleProject(idx, v)"
            :always-opened="hrMode"
            :none="hrMode"
          >
            <Shadow
              class="relative"
              :class="{
                'transition-opacity group-hover:opacity-65 hover:!opacity-100':
                  idx !== openedProject,
              }"
            >
              <div
                class="text-lg font-semibold mb-2 leading-5"
                :class="{ '!text-xl print:!text-[1rem]': hrMode }"
              >
                {{ project.title
                }}<span v-if="project.nda" class="opacity-50 ml-1">**</span>
              </div>

              <p v-if="project.description" class="mb-3">
                {{ project.description }}
              </p>

              <p
                class="text-sky-500 mb-1"
                :class="{
                  '!text-gray-700 underline underline-offset-3': hrMode,
                }"
              >
                {{ hrMode ? 'Мой вклад:' : '[ Мой вклад ]' }}
              </p>
              <p
                v-for="contrib in project.contribution"
                class="mb-1 print:mb-0"
              >
                <template v-if="!hrMode">
                  [<span class="text-green-500">+</span>]
                </template>
                <span v-else class="mr-2">•</span>
                {{ contrib }}
              </p>

              <template v-if="project.achievments?.length">
                <p
                  class="text-sky-500 mb-1"
                  :class="{
                    '!text-gray-700 underline underline-offset-3': hrMode,
                  }"
                >
                  {{ hrMode ? 'Достижения:' : '[ Достижения ]' }}
                </p>
                <p
                  v-for="achievment in project.achievments"
                  class="mb-1 print:mb-0"
                >
                  <template v-if="!hrMode">
                    [<span class="text-green-500">↑</span>]
                  </template>
                  <span v-else class="mr-2">•</span>
                  {{ achievment }}
                </p>
              </template>

              <p
                class="text-sky-500 mb-1 mt-3"
                :class="{
                  '!text-gray-700 underline underline-offset-3': hrMode,
                }"
              >
                {{ hrMode ? 'Методология:' : '[ Методология ]' }}
              </p>
              <p class="mb-3">
                {{ project.methodology }}
              </p>

              <p
                class="text-sky-500 mb-1 mt-3"
                :class="{
                  '!text-gray-700 underline underline-offset-3': hrMode,
                }"
              >
                {{ hrMode ? 'Архитектура:' : '[ Архитектура ]' }}
              </p>

              <p class="mb-3">
                {{ project.architecture }}
              </p>
            </Shadow>
          </Spoiler>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import Divider from '~/shared/ui/Divider.vue';
  import Heading from '~/shared/ui/Heading.vue';
  import Paragraph from '~/shared/ui/Paragraph.vue';
  import Spoiler from '~/shared/ui/Spoiler.vue';
  import Shadow from '~/shared/ui/Shadow.vue';

  import { stacks } from '~/shared/data/stacks';
  import { projects } from '~/shared/data/projects';
  import Tooltip from '~/shared/ui/Tooltip.vue';
  import { skills } from '~/shared/data/skills';
  import { ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useTheme } from '~/shared/composables';
  import Bio from './ui/Bio.vue';

  const { isLight } = useTheme();

  const route = useRoute();
  const router = useRouter();

  const openedProject = ref<number | null>(null);
  const projectSpoilers = ref();
  const onToggleProject = (idx: number, value: boolean) => {
    if (value) {
      openedProject.value = idx;
      projectSpoilers.value.forEach((spoiler: any, i: number) => {
        if (idx !== i) {
          spoiler.opened = false;
        }
      });
    } else {
      openedProject.value = null;
    }
  };

  const toggleHrMode = () => {
    if ('hr' in route.query) {
      router.replace('/cv/');
    } else {
      router.replace('/cv?hr');
    }
  };

  const hrMode = ref<boolean>(false);

  watch(
    () => route.query,
    () => {
      if ('hr' in route.query) {
        hrMode.value = true;
        isLight.value = true;
        openedProject.value = null;
      } else {
        hrMode.value = false;
        isLight.value = false;
      }
    },
    { immediate: true }
  );
</script>
