import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LocalCache from "../utils/cache"
import { mapRoutes } from "@/utils/map-menu";
import store from "@/store";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/main",
    //必须添加name，动态添加路由
    name: "main",
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
    const menus = LocalCache.getCache("menu")
    const routes = mapRoutes(menus)
    routes.forEach((route: any) => {
      router.addRoute("main", route)
    })
    if (!t) {
      return "/login"
    } else {

    }
  }

})
export default router;
