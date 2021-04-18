import { createRouter, createWebHistory } from 'vue-router';
import TheShelf from './components/TheShelf';
import NotFound from './components/NotFound';


const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        redirect: 'shelf',
        // props: true
      },
      {
        path: '/shelf',
        component: TheShelf
      },

      { path: '/:notFound(.*)', component: NotFound }
    ],
    scrollBehavior(to, from, savedPosition){
      // console.log(to, from, savedPosition);
      if(savedPosition) {
        return savedPosition;
      }5
      return {left: 0, top: 0};
    },
  });

  export default router;