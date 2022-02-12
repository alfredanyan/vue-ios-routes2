
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/home'},
      { 
        path: '/home',
        component: () => import('src/pages/Home/Home.vue'),
        children: [
          {
            path: '/home/child',
            component: () => import('src/pages/Home/Child.vue'),
            children: [
              {
                path: '/home/child/grandchild',
                component: () => import('src/pages/Home/Grandchild.vue')
              }
            ]
          }
        ]
      },
      {
        path: '/questions',
        component: () => import('src/pages/Questions/Questions.vue'),
        children: [
          {
            path: '/questions/answers',
            component: () => import('src/pages/Questions/Answers.vue'),
          }
        ]
      }
    ]
  },
  
  
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
