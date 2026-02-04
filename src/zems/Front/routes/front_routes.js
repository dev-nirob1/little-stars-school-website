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
      {
        path: 'notice',
        name: 'notice',
        component: () => import('../Pages/NoticePage.vue'),
      },
      {
        path: 'academic',
        name: 'academic',
        component: () => import('../Pages/AcademicPage.vue'),
      },
      {
        path: 'gallery',
        name: 'gallery',
        component: () => import('../Pages/GalleryPage.vue'),
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../Pages/ContactPage.vue'),
      },
      {
        path: 'admission',
        name: 'admission',
        component: () => import('../Pages/AdmissionPage.vue'),
      },
    ],
  },
]

export default front_routes
