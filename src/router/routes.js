
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        name: 'boards',
        path: '',
        component: () => import('pages/Boards.vue'),
      },
      {
        name: 'board',
        path: '/board',
        component: () => import('pages/Board.vue'),
        props: route => ({ board: route.query.b }),
      },
      {
        name: 'thread',
        path: '/thread',
        component: () => import('pages/Thread.vue'),
        props: route => ({ board: route.query.b, threadNumber: route.query.t.toString() }),
      },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
