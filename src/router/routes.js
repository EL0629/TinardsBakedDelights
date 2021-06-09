
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Index.vue') }
    ]
  },
  {
    path: '/LoginForm',
    component: () => import('layouts/LoginForm.vue')
  },
  {
    path: '/AdminForm',
    component: () => import('layouts/AdminForm.vue'),
      children: [
        {
          path: '',
          component: () =>
            import('src/pages/ProductPage.vue')
        },
        {
            path: 'Account',
            component: () =>
              import ('pages/AccountPage.vue')
        },
      ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
