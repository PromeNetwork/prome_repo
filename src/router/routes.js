import HomeView from '@/views/frontPage/HomeView';
import error403Page from '@/views/errorPage/403';
import error404Page from '@/views/errorPage/404';

export default [
  {
    path: '/403',
    name: 'error403Page',
    // component: () =>
    //   import(/* webpackChunkName: "error403Page" */ '@/views/errorPage/403'),
    component:error403Page,
    meta: { title: '无访问权限' },
  },
  {
    path: '/',
    name: 'HomeView',
    //懒加载 webpackChunkName 对应的路由的name
    // component: () => import(/* webpackChunkName: "mainView" */ '@/views/HomeView'),
    component:HomeView,
    //为了更好的兼容 各种缓存 或是其他的复杂的功能 路由最好是两层
  },
  {
    path: '/:catchAll(.*)',
    name: 'error404',
    // component: () =>
    //   import(/* webpackChunkName: "error404" */ '@/views/errorPage/404'),
    component:error404Page,
    meta: { title: '页面不存在' },
  },
];
