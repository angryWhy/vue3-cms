import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LocalCache from "../utils/cache"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/main",
    component: () => import("../views/main/main.vue")
  },
  {
    path: "/login",
    component: () => import("../views/login-index.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from) => {
  const t = LocalCache.getCache("token")
  if (to.path !== "/login") {
    if (!t) {
      return "/login"
    }
  }
})
export default router;
