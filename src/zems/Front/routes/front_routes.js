const front_routes = [
  {
    path: '/',
    component: () => import('../Layout/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../Pages/HomePage.vue'),
      },
    ],
  },
]

export default front_routes
