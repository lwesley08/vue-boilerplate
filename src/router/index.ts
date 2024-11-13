import { createRouter, createWebHistory } from 'vue-router';
import { useClientStore } from '@/stores/client';

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: 'Cool Website',
        description: 'Cool Website'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About Us',
        description: 'Cool Website - About Us'
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const clientStore = useClientStore();
  document.title = to.meta?.title ? `${clientStore.name} | ${to.meta.title}` : clientStore.name;
  document.querySelector('meta[name="description"]')?.setAttribute('content', to.meta.description);
  next();
});

export default router;
