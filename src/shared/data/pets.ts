import { ref } from 'vue';

import hlApiLogo from '~/shared/assets/images/hl-api.png';
import nnLogo from '~/shared/assets/images/nn.jpg';
import nnServerLogo from '~/shared/assets/images/nn-server.jpg';
import zlLogo from '~/shared/assets/images/zaklauncher.png';

export interface Pet {
  logo: string;
  name: string;
  description: string;
  url: string;
  stack: string[];
}

export const pets = ref<Pet[]>([
  {
    name: 'ZakLauncher',
    description:
      'Кросс-платформенный Minecraft-лаунчер, работающий с несколькими типами авторизации, собственной системой сборок, интеграцией к CurseForge и ModRinth. <br/> <a class="text-sky-500" href="https://discord.gg/DAgMUTBJSn" target="blank">[ Discord сервер ]</a>',
    logo: zlLogo,
    url: 'https://github.com/UncleZak/zak-launcher-releases/releases',
    stack: ['TypeScript', 'Vue3', 'NW.js', 'Vite', 'SCSS', 'MCLC'],
  },
  {
    name: 'Nu11Net',
    description:
      '[Game] Виртуальная площадка с программируемыми устройствами или что-то типа того¯\\_(ツ)_/¯. <br/> <a class="text-sky-500" href="https://github.com/DanteZZ/nu11net-client/blob/refactoring/LONGPOST.md" target="blank">[ Полное описание проекта ]</a>',
    logo: nnLogo,
    url: 'https://github.com/DanteZZ/nu11net-client/tree/refactoring',
    stack: ['TypeScript', 'NW.js', 'WebPack', 'Vue2', 'NWAB*', 'OGE*'],
  },
  {
    name: 'Nu11Net Server',
    description: 'Сервер для Nu11Net',
    logo: nnServerLogo,
    url: 'https://github.com/DanteZZ/nu11net-server',
    stack: ['WebSocket', 'Babel', 'Blessed', 'React-Blessed'],
  },
  {
    name: 'HomeLib',
    description: 'Персональный сервис учёта книжной библиотеки [PWA]',
    logo: 'https://camo.githubusercontent.com/ff12764481f04fcbf9b13876a1afd556067ba55d60a624257759f5b13d47a6b9/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d31444549745252556133354873614255676d394a7737354432452d777541596457',
    url: 'https://github.com/DanteZZ/homelib',
    stack: ['React', 'Bootstrap 5', 'Redux', 'Redux Thunk', 'SCSS'],
  },
  {
    name: 'HomeLib API',
    description: 'Rest API для HomeLib',
    logo: hlApiLogo,
    url: 'https://github.com/DanteZZ/homelib-api',
    stack: ['Express', 'Babel', 'JWT.js', 'MySQL'],
  },
]);
