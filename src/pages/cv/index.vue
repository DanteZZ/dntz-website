<template>
  <div
    class="p-3 grid grid-cols-1 gap-16 lg:grid-cols-[256px_auto] print:text-[13px] print:!p-0"
  >
    <Bio
      class="hidden lg:block"
      :hr-mode="hrMode"
      @toggle-hr-mode="toggleHrMode"
    />
    <div class="hidden lg:block" />
    <div>
      <Shadow>
        <Heading class="text-3xl !text-gray-300 light:!text-gray-700">
          Curriculum Vitae
        </Heading>
      </Shadow>
      <Divider />

      <Bio class="lg:hidden" :hr-mode="hrMode" @toggle-hr-mode="toggleHrMode" />
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

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 gap-y-0">
            <div>
              <div v-for="stack in stacks[0]">
                <div
                  class="text-lg font-semibold mb-2 print:!text-base print:mb-0"
                >
                  {{ stack.label }}
                </div>
                <Paragraph class="block">
                  <template v-for="(item, idx) in stack.items">
                    <component
                      :is="item?.notion ? Tooltip : 'span'"
                      :text="item?.notion"
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
              <div v-for="stack in stacks[1]">
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
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 gap-y-0 mb-10">
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
      <Spoiler
        ref="projectsContainerSpoiler"
        :always-opened="hrMode"
        :height="projectsCollapsedHeight"
        :none="hrMode"
        :collapsed-label="collapsedProjectsLabel"
      >
        <template #default>
          <Shadow>
            <Heading h="2" :class="{ '!text-gray-700 print:!text-xl': hrMode }">
              Коммерческие проекты
            </Heading>
            <Paragraph>
              <span class="opacity-50 ml-1">**</span> - Названия и некоторые
              детали проектов я не имею права разглашать в связи с NDA.
            </Paragraph>
          </Shadow>
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 gap-y-6"
            :class="{ '!grid-cols-1 !gap-0': hrMode, group: !hrMode }"
          >
            <div
              v-for="(project, idx) in projects"
              class="transition-size"
              :class="{
                'lg:col-span-2': openedProject === idx,
              }"
              :style="{
                'grid-row-start':
                  $viewport.isGreaterOrEquals('lg') &&
                  openedProject === idx + 1 &&
                  openedProject % 2 === 1
                    ? Math.ceil(openedProject / 2) + 1
                    : 'auto',
              }"
            >
              <!-- <Divider double class="!mb-1" :class="{ '!mb-2': hrMode }">
                [ {{ project.period[0] }} - {{ project.period[1] }} ]
              </Divider> -->
              <Spoiler
                ref="projectSpoilers"
                full
                @toggle="(v) => onToggleProject(idx, v)"
                :always-opened="hrMode"
                :none="hrMode"
              >
                <template #default="{ opened }">
                  <Shadow
                    class="relative"
                    :class="{
                      'transition-opacity group-hover:opacity-65 hover:!opacity-100':
                        idx !== openedProject,
                    }"
                  >
                    <div
                      class="text-lg font-semibold mb-0 leading-5"
                      :class="{ '!text-xl mb-1 print:!text-[1rem]': hrMode }"
                    >
                      {{ project.title
                      }}<span v-if="project.nda" class="opacity-50 ml-1"
                        >**</span
                      >
                    </div>
                    <div
                      class="text-sm mb-2 text-sky-300 light:text-sky-600 print:!text-gray-300"
                      :class="{ '!text-gray-500': hrMode }"
                    >
                      [ {{ project.period[0] }} - {{ project.period[1] }} ]
                    </div>

                    <p v-if="project.description" class="mb-3">
                      {{ project.description }}
                    </p>
                    <p
                      v-if="opened"
                      class="text-sky-500 mb-1"
                      :class="{
                        '!text-gray-700 underline underline-offset-3 font-semibold':
                          hrMode,
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
                          '!text-gray-700 underline underline-offset-3 font-semibold':
                            hrMode,
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
                        '!text-gray-700 underline underline-offset-3 font-semibold':
                          hrMode,
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
                        '!text-gray-700 underline underline-offset-3 font-semibold':
                          hrMode,
                      }"
                    >
                      {{ hrMode ? 'Архитектура:' : '[ Архитектура ]' }}
                    </p>

                    <p class="mb-3">
                      {{ project.architecture }}
                    </p>

                    <p
                      v-if="project.technologies"
                      class="text-sky-500 mb-1 mt-3"
                      :class="{
                        '!text-gray-700 underline underline-offset-3 font-semibold':
                          hrMode,
                      }"
                    >
                      {{ hrMode ? 'Технологии:' : '[ Технологии ]' }}
                    </p>

                    <p v-if="project.technologies" class="mb-3">
                      <span
                        v-for="(item, idx) in getTechnologies(
                          project.technologies
                        )"
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
                              (idx < project.technologies.length - 1
                                ? ', '
                                : '')
                            }}
                          </span>
                          <span v-else class="text-nowrap">
                            {{ '{' }}
                            <span
                              class="text-gray-50 light:text-gray-800 hover:text-sky-500 transition-colors"
                            >
                              {{ item.label }}
                            </span>
                            {{ '}' }}
                          </span>
                        </a>
                      </span>
                    </p>
                  </Shadow>
                </template>
              </Spoiler>
            </div>
          </div>
        </template>
      </Spoiler>
      <Divider />
      <Spoiler
        ref="opensourceContainerSpoiler"
        :always-opened="hrMode"
        :height="opensourceCollapsedHeight"
        :none="hrMode"
        :collapsed-label="collapsedOpensourceLabel"
      >
        <template #default>
          <Shadow>
            <Heading h="2" :class="{ '!text-gray-700 print:!text-xl': hrMode }">
              Open Source проекты
            </Heading>
            <Paragraph>
              Ключевые публичные инициативы с открытым исходным кодом и
              постоянной поддержкой.
            </Paragraph>
          </Shadow>
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 gap-y-6"
            :class="{ '!grid-cols-1 !gap-0': hrMode, group: !hrMode }"
          >
            <div
              v-for="(project, idx) in opensourceProjects"
              class="transition-size"
              :class="{
                'lg:col-span-2': openedOpensource === idx,
              }"
            >
              <Spoiler
                ref="opensourceSpoilers"
                full
                @toggle="(v) => onToggleOpensource(idx, v)"
                :always-opened="hrMode"
                :none="hrMode"
              >
                <template #default="{ opened }">
                  <Shadow
                    class="relative"
                    :class="{
                      'transition-opacity group-hover:opacity-65 hover:!opacity-100':
                        idx !== openedOpensource,
                    }"
                  >
                    <div
                      class="text-lg font-semibold mb-0 leading-5"
                      :class="{ '!text-xl mb-1 print:!text-[1rem]': hrMode }"
                    >
                      {{ project.title }}
                    </div>
                    <div
                      class="text-sm mb-2 text-sky-300 light:text-sky-600 print:!text-gray-300"
                      :class="{ '!text-gray-500': hrMode }"
                    >
                      [ {{ project.period[0] }} - {{ project.period[1] }} ]
                    </div>
                    <p v-if="project.description" class="mb-3">
                      {{ project.description }}
                    </p>
                    <p
                      v-if="opened"
                      class="text-sky-500 mb-1"
                      :class="{
                        '!text-gray-700 underline underline-offset-3 font-semibold':
                          hrMode,
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
                          '!text-gray-700 underline underline-offset-3 font-semibold':
                            hrMode,
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
                        '!text-gray-700 underline underline-offset-3 font-semibold':
                          hrMode,
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
                        '!text-gray-700 underline underline-offset-3 font-semibold':
                          hrMode,
                      }"
                    >
                      {{ hrMode ? 'Архитектура:' : '[ Архитектура ]' }}
                    </p>
                    <p class="mb-3">
                      {{ project.architecture }}
                    </p>
                    <p
                      v-if="project.technologies"
                      class="text-sky-500 mb-1 mt-3"
                      :class="{
                        '!text-gray-700 underline underline-offset-3 font-semibold':
                          hrMode,
                      }"
                    >
                      {{ hrMode ? 'Технологии:' : '[ Технологии ]' }}
                    </p>
                    <p v-if="project.technologies" class="mb-3">
                      <span
                        v-for="(item, idx) in getTechnologies(
                          project.technologies
                        )"
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
                              (idx < project.technologies.length - 1
                                ? ', '
                                : '')
                            }}
                          </span>
                          <span v-else class="text-nowrap">
                            {{ '{' }}
                            <span
                              class="text-gray-50 light:text-gray-800 hover:text-sky-500 transition-colors"
                            >
                              {{ item.label }}
                            </span>
                            {{ '}' }}
                          </span>
                        </a>
                      </span>
                    </p>
                    <div
                      v-if="project.github || project.npm"
                      class="flex flex-wrap gap-x-4 gap-y-2 text-sm text-sky-400 light:text-sky-600 print:text-gray-400"
                      :class="{ '!text-gray-600': hrMode }"
                    >
                      <a
                        v-if="project.github"
                        :href="project.github"
                        target="_blank"
                        class="hover:underline underline-offset-4"
                      >
                        GitHub
                      </a>
                      <a
                        v-if="project.npm"
                        :href="project.npm"
                        target="_blank"
                        class="hover:underline underline-offset-4"
                      >
                        npm
                      </a>
                    </div>
                  </Shadow>
                </template>
              </Spoiler>
            </div>
          </div>
        </template>
      </Spoiler>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { useHead } from '#app';
  import Divider from '~/shared/ui/Divider.vue';
  import Heading from '~/shared/ui/Heading.vue';
  import Paragraph from '~/shared/ui/Paragraph.vue';
  import Spoiler from '~/shared/ui/Spoiler.vue';
  import Shadow from '~/shared/ui/Shadow.vue';

  import { stacks } from '~/shared/data/stacks';
  import { opensourceProjects, projects } from '~/shared/data/projects';
  import Tooltip from '~/shared/ui/Tooltip.vue';
  import { skills } from '~/shared/data/skills';
  import { computed, onBeforeUnmount, ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useTheme } from '~/shared/composables';
  import Bio from './ui/Bio.vue';
  import { technologies } from '~/shared/data/technologies';

  const currentDate = computed(() =>
    new Date().toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
  );

  useHead({
    title: `CV - Maxim Trofimov ${currentDate.value}`,
  });

  const { isLight } = useTheme();

  const route = useRoute();
  const router = useRouter();

  const openedProject = ref<number | null>(null);
  const openedOpensource = ref<number | null>(null);
  const projectsContainerSpoiler = ref<InstanceType<typeof Spoiler> | null>(
    null
  );
  const opensourceContainerSpoiler = ref<InstanceType<typeof Spoiler> | null>(
    null
  );
  const projectSpoilers = ref<Array<InstanceType<typeof Spoiler>> | null>(null);
  const opensourceSpoilers = ref<Array<InstanceType<typeof Spoiler>> | null>(
    null
  );
  const onToggleProject = (idx: number, value: boolean) => {
    if (value) {
      projectsContainerSpoiler.value?.open?.();
      openedProject.value = idx;
      projectSpoilers.value
        ?.filter((_spoiler, i) => i !== idx)
        .forEach((spoiler) => {
          spoiler.close?.();
        });
    } else {
      openedProject.value = null;
    }
  };

  const onToggleOpensource = (idx: number, value: boolean) => {
    if (value) {
      opensourceContainerSpoiler.value?.open?.();
      openedOpensource.value = idx;
      opensourceSpoilers.value
        ?.filter((_spoiler, i) => i !== idx)
        .forEach((spoiler) => {
          spoiler.close?.();
        });
    } else {
      openedOpensource.value = null;
    }
  };

  const getTechnologies = (keys: string[]) => {
    return technologies.filter((i) => keys.includes(i.key));
  };

  const toggleHrMode = () => {
    if ('hr' in route.query) {
      router.replace('/cv/');
    } else {
      router.replace('/cv?hr');
    }
  };

  const hrMode = ref<boolean>(false);
  const projectsCollapsedHeight = 500;
  const projectsPreviewCount = 4;
  const opensourceCollapsedHeight = 500;
  const opensourcePreviewCount = 3;

  const collapsedProjectsLabel = computed(() => {
    const hidden = Math.max(projects.value.length - projectsPreviewCount, 0);
    return hidden > 0 ? `Ещё ${hidden} проектов` : 'Развернуть';
  });
  const collapsedOpensourceLabel = computed(() => {
    const hidden = Math.max(
      opensourceProjects.value.length - opensourcePreviewCount,
      0
    );
    return hidden > 0 ? `Ещё ${hidden} проектов` : 'Развернуть';
  });

  watch(
    () => route.query,
    () => {
      const isHr = 'hr' in route.query;
      hrMode.value = isHr;
      isLight.value = isHr;
      if (isHr) {
        openedProject.value = null;
        openedOpensource.value = null;
      }
    },
    { immediate: true }
  );

  onBeforeUnmount(() => {
    if (hrMode.value) {
      hrMode.value = false;
      isLight.value = false;
    }
    openedProject.value = null;
    openedOpensource.value = null;
  });
</script>
