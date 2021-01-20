/*
 * @Descripttion:
 * @version: 1.0
 * @Author: ekko
 * @Date: 2021-01-18 09:32:52
 * @LastEditors: ekko
 * @LastEditTime: 2021-01-20 14:24:38
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {
    hmr: true, //表示是否启用 dva model 的热更新。
    immer: true, //表示是否启用 immer 以方便修改 reducer
  },
  routes: [
    // { path: '/', component: '@/pages/index' },
    {
      path: '/',
      component: '@/layouts/index',
      title: '这是layout',
      routes: [
        {
          path: '/',
          redirect: '/course',
        },
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
        {
          path: '/course',
          component: '@/pages/course',
          exact: true,
          title: '课程介绍',
        },
        {
          path: '/about',
          component: '@/pages/about',
          exact: true,
          title: '关于我们',
        },
      ],
    },
  ],
});
