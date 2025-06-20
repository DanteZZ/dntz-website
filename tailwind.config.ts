import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default <Partial<Config>>{
  darkMode: 'class',
  content: ['./src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: colors.red,
      },
      fontFamily: {
        sans: ['Ubuntu Mono', 'monospace'],
      },
    },
  },
};
