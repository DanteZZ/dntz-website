import { ref } from 'vue';

export const stacks = ref<
  Array<{
    label: string;
    items: Array<{ label: string; link?: string; notion?: string }>;
  }>
>([
  {
    label: 'Languages/Syntax',
    items: [
      {
        label: 'JavaScript',
        link: 'https://developer.mozilla.org/docs/Web/JavaScript',
      },
      { label: 'TypeScript', link: 'https://www.typescriptlang.org/' },
      { label: 'HTML', link: 'https://developer.mozilla.org/docs/Web/HTML' },
      { label: 'CSS', link: 'https://developer.mozilla.org/docs/Web/CSS' },
      { label: 'SCSS', link: 'https://sass-lang.com/' },
      { label: 'PHP', link: 'https://www.php.net/' },
      {
        label: 'Jinja2/Nunjucks',
        link: 'https://mozilla.github.io/nunjucks/',
      },
      { label: 'SFC', link: 'https://vuejs.org/' },
      { label: 'JSX', link: 'https://react.dev/docs/introducing-jsx' },
      { label: 'JSS', link: 'https://cssinjs.org/' },
      {
        label: 'Java',
        link: 'https://www.java.com/',
        notion:
          'В основном, для расширения функционала \nработы из под WebView, есть опыт \nнаписания плагинов для Spigot',
      },
      { label: 'SQL', link: 'https://en.wikipedia.org/wiki/SQL' },
      { label: 'GraphQL', link: 'https://graphql.org/' },
      {
        label: 'CJS/MJS/UMD, Node',
        link: 'https://nodejs.org/',
        notion:
          'Разрабатывал несколько проектов, от API \nдо библиотек, плагинов, кастомных \nсборщиков и standalone приложений',
      },
    ],
  },
  {
    label: 'JS/TS frameworks',
    items: [
      { label: 'Vue 2/3', link: 'https://vuejs.org/' },
      {
        label: 'React',
        link: 'https://react.dev/',
        notion: 'Тегущий грейд - Middle',
      },
      { label: 'Three.js', link: 'https://threejs.org/' },
      { label: 'Tres.js', link: 'https://tresjs.org/' },
      { label: 'Nuxt2/3', link: 'https://nuxt.com/' },
      {
        label: 'LiteSSR',
        link: 'https://lssr.dntz.xyz/',
        notion: 'Библиотека разработанная мной',
      },
      { label: 'Cordova', link: 'https://cordova.apache.org/' },
      { label: 'Quasar', link: 'https://quasar.dev/' },
    ],
  },
  {
    label: 'UI Frameworks/Libraries',
    items: [
      { label: 'PrimeVue', link: 'https://www.primefaces.org/primevue/' },
      { label: 'Vuetify', link: 'https://vuetifyjs.com/' },
      { label: 'AntDesign/Antdv', link: 'https://antdv.com/' },
      { label: 'MaterialUI', link: 'https://mui.com/' },
      { label: 'BootStrap', link: 'https://getbootstrap.com/' },
      { label: 'Quasar-UI', link: 'https://quasar.dev/' },
      { label: 'HeadlessUI', link: 'https://headlessui.com/' },
      { label: 'Strapi', link: 'https://strapi.io/' },
    ],
  },
  {
    label: 'Builder/Utilities',
    items: [
      { label: 'Vite', link: 'https://vitejs.dev/' },
      { label: 'WebPack', link: 'https://webpack.js.org/' },
      { label: 'Babel', link: 'https://babeljs.io/' },
      { label: 'Rollup', link: 'https://rollupjs.org/' },
      { label: 'StoryBook', link: 'https://storybook.js.org/' },
      {
        label: 'Jest',
        link: 'https://jestjs.io/',
        notion: 'Мало опыта на коммерческих проектах',
      },
      { label: 'Express', link: 'https://expressjs.com/' },
      { label: 'NW.JS', link: 'https://nwjs.io/' },
    ],
  },
  {
    label: 'CMS/CRM/Systems',
    items: [
      { label: 'WordPress', link: 'https://wordpress.org/' },
      { label: 'Битрикс', link: 'https://www.1c-bitrix.ru/' },
      {
        label: 'MobX',
        link: 'https://mobx.js.org/',
        notion: 'Давно не "практиковался"',
      },
      {
        label: 'Битрикс24',
        link: 'https://www.bitrix24.ru/',
        notion: 'Давно не "Практиковался"',
      },
      { label: 'EspoCRM', link: 'https://www.espocrm.com/' },
      { label: 'MikBill', link: 'https://www.mikbill.com/' },
      { label: 'LanBilling', link: 'https://lanbilling.ru/' },
    ],
  },
  {
    label: 'Tools/Libraries',
    items: [
      { label: 'Pinia', link: 'https://pinia.vuejs.org/' },
      { label: 'VueX', link: 'https://vuex.vuejs.org/' },
      { label: 'Redux', link: 'https://redux.js.org/' },
      { label: 'Axios', link: 'https://axios-http.com/' },
      { label: 'Lodash', link: 'https://lodash.com/' },
      { label: 'Zod', link: 'https://zod.dev/' },
      { label: 'VeeValidate', link: 'https://vee-validate.logaretm.com/' },
      { label: 'Vuelidate', link: 'https://vuelidate-next.netlify.app/' },
      { label: 'TailWind', link: 'https://tailwindcss.com/' },
      { label: 'MDI', link: 'https://materialdesignicons.com/' },
      { label: 'FontAwesome', link: 'https://fontawesome.com/' },
      { label: 'Leaflet', link: 'https://leafletjs.com/' },
      { label: 'yMaps', link: 'https://yandex.com/maps' },
      { label: 'JQuery', link: 'https://jquery.com/' },
      { label: '...' },
    ],
  },
]);
