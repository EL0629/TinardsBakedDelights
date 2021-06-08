
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
    component: () => import('layouts/LoginForm.vue'),
    children: [
      { path: '', component: () => import('src/pages/ProductPage.vue') }
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
