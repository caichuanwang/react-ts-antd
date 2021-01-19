/*
 * @Descripttion:
 * @version: 1.0
 * @Author: ekko
 * @Date: 2021-01-18 09:32:52
 * @LastEditors: ekko
 * @LastEditTime: 2021-01-19 16:02:48
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },

  routes: [
    // { path: '/', component: '@/pages/index' },
    {
      path: '/',
      component: '@/layouts/index',
      title: '这是layout',
      routes: [
        {
          path: '/page1',
          component: '@/pages/index',
          exact: true,
          title: '这是page1',
        },
        {
          path: '/airpay',
          component: '@/pages/airpay',
          exact: true,
          title: '这是airpay',
        },
      ],
    },
  ],
});
