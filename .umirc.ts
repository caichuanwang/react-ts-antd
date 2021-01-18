import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // { path: '/', component: '@/pages/index' },
    {
      path: '/',
      component: '@/layout/index',
      title: '这是layout',
      routes: [
        {
          path: '/page1',
          component: '@/pages/index',
          exact: true,
          title: '这是page1',
        },
      ],
    },
  ],
});
