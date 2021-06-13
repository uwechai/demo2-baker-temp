import { createRouter, createWebHistory } from "vue-router";
import TheShelf from "./components/TheShelf/TheShelf";
import NotFound from "./components/NotFound";
import TheCart from "./components/TheCart/TheCart";
import TheBigOrder from "./components/TheBigOrder/TheBigOrder";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "shelf",
      // props: true
    },
    {
      name: "shelf",
      path: "/shelf",
      components: { default: TheShelf },
    },
    {
      name: "big-order",
      path: "/big-order",
      components: { default: TheBigOrder },
    },
    {
      name: "cart",
      path: "/cart",
      components: { default: TheCart },
    },

    {
      name: "notFound",
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

export default router;
