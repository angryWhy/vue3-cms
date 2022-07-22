import { RouteRecord } from "vue-router";
export function mapRoutes(userMenus: any[]): RouteRecord[] {
    const routes: RouteRecord[] = []
    //1.先默认加载所有的routes
    const allRoutes: RouteRecord[] = []
    //使用webpack，动态加载每个文件,true是否递归
    const routesFile = require.context("../router/main", true, /\.ts$/)
    //routesFile为每个文件对象，key为路径名字
    routesFile.keys().forEach(key => {
        //路径名字为main文件路径，需要拼接
        //完整的路径
        const route = require("../router/main" + key.split(".")[1])
        allRoutes.push(route)
    })
    //将获取的路由表和上面webpack加载的进行查找，分主菜单和子菜单，进行递归
    const getRoute = (menus: any[]) => {
        for (let menu of menus) {
            if (menu.type === 2) {
                const route = allRoutes.find(route => route.path === menu.url)
                if (route) {
                    routes.push(route)
                }
            } else {
                getRoute(menu.children)
            }
        }
    }
    getRoute(userMenus)
    return routes
}