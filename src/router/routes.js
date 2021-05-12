
const routes = [
  {
    path: '/',
    component: () => import('pages/Index.vue')
  },
  // {
  //   path: '/',
  //   component: () => import('layouts/LoginForm.vue')
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
