<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import lifecycles from '#/micro/lifecycle';
import plugins from '#/micro/plugin';

type RouteMetaLike = Record<string, unknown> & {
  microAppName?: string;
  microAppUrl?: string;
};

const route = useRoute();

const microAppUrl = computed(() => {
  const meta = route.meta as RouteMetaLike;
  return meta.microAppUrl;
});

const microAppName = computed(() => {
  const meta = route.meta as RouteMetaLike;
  return meta.microAppName;
});

const microAppKey = computed(
  () => `${microAppName.value}@@${microAppUrl.value}`,
);
</script>

<template>
  <WujieVue
    v-if="microAppUrl"
    :key="microAppKey"
    width="100%"
    height="100%"
    :name="microAppName"
    :url="microAppUrl"
    :plugins="plugins"
    v-bind="lifecycles"
  />
</template>
