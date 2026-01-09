import type { RouteRecordRaw } from 'vue-router';

import { MicroAppLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ri:apps-ai-line',
      order: -1,
      title: $t('micro.title'),
    },
    name: 'MicroApps',
    path: '/micro-apps',
    children: [
      {
        name: 'React17',
        path: '/react17',
        component: MicroAppLayout,
        meta: {
          affixTab: true,
          icon: 'ion:logo-react',
          title: 'React17',
          microAppName: 'React17',
          microAppUrl: '//wujie-micro.github.io/demo-react17/',
        },
      },
      {
        name: 'Angular12',
        path: '/angular12',
        component: MicroAppLayout,
        meta: {
          icon: 'mdi:angularjs',
          title: 'Angular12',
          microAppName: 'Angular12',
          microAppUrl: '//wujie-micro.github.io/demo-angular12/',
        },
      },
      {
        name: 'Vue3',
        path: '/vue3',
        component: MicroAppLayout,
        meta: {
          icon: 'mdi:vuejs',
          title: 'Vue3',
          microAppName: 'Vue3',
          microAppUrl: '//wujie-micro.github.io/demo-vue3/',
        },
      },
    ],
  },
];

export default routes;
