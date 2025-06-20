import { ref } from 'vue';

const isLight = ref<boolean>(false);

export const useTheme = () => {
  return {
    isLight,
  };
};
