import { computed } from 'vue';

import { categories, technologies } from './technologies';
import type { Category, Technology } from './technologies';
export const stacks = computed(() => {
  const evenCategories: Array<Category & { items: Technology[] }> = [];
  const oddCategories: Array<Category & { items: Technology[] }> = [];

  categories.forEach((category, index) => {
    // Технологии, относящиеся к этой категории
    const items = technologies.filter((t) => t.category === category.key);

    const categoryWithItems = {
      ...category,
      items,
    };

    if (index % 2 === 0) {
      evenCategories.push(categoryWithItems);
    } else {
      oddCategories.push(categoryWithItems);
    }
  });

  return [evenCategories, oddCategories] as const;
});
