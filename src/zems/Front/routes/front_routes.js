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
      {
        path: 'about',
        name: 'about',
        component: () => import('../Pages/AboutPage.vue'),
      },
    ],
  },
]

export default front_routes
