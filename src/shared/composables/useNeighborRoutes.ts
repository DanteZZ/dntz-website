import { reactive, ref, toRefs, watch } from 'vue';
import { useRoute, useRouter, type RouteRecordRaw } from 'vue-router';

interface NeighborResult {
  before: RouteRecordRaw[];
  after: RouteRecordRaw[];
}

const initialized = ref<boolean>(false);

const neighbors = reactive<NeighborResult>({
  before: [],
  after: [],
});

export function useNeighborRoutes() {
  if (initialized.value) return toRefs(neighbors);
  const router = useRouter();
  const route = useRoute();

  const findRouteInTree = (
    routes: RouteRecordRaw[],
    targetName: string,
    parent: RouteRecordRaw | null = null
  ): {
    parent: RouteRecordRaw | null;
    index: number;
    siblings: RouteRecordRaw[];
  } | null => {
    for (const r of routes) {
      if (r.name === targetName) {
        return parent
          ? {
              parent,
              siblings: parent.children ?? [],
              index: (parent.children ?? []).findIndex(
                (child) => child.name === targetName
              ),
            }
          : {
              parent: null,
              siblings: routes,
              index: routes.findIndex((child) => child.name === targetName),
            };
      }

      if (r.children?.length) {
        const found = findRouteInTree(r.children, targetName, r);
        if (found) return found;
      }
    }
    return null;
  };

  watch(
    () => route.fullPath,
    () => {
      const routes = router.options.routes;
      const targetName = route.name as string;

      const found = findRouteInTree([...routes], targetName);

      if (!found || found.index === -1) {
        neighbors.before = [];
        neighbors.after = [];
      } else {
        neighbors.before = found.siblings.slice(0, found.index);
        neighbors.after = found.siblings.slice(found.index + 1);
      }
    },
    { immediate: true }
  );

  return toRefs(neighbors);
}
