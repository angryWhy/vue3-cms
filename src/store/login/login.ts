import { mapRoutes } from "@/utils/map-menu";
import { Module } from "vuex";
import { IRootState } from "..";
import { accountLoginAction, requestMenuByRoleId, requestUserInfoById } from '../../service/login/login';
import LocalCache from "../../utils/cache"
import router from '../../router/index';

export interface ILoginState {
    token: string,
    userInfo: any,
    userMenus: any[]
}
export const loginModule: Module<ILoginState, IRootState> = {
    namespaced: true,
    state() {
        return {
            token: "",
            userInfo: "",
            id: "",
            userMenus: [],
        }
    },
    mutations: {
        changeToken(state, token: string) {
            state.token = token
        },
        changeMenu(state, payload: any[]) {

            state.userMenus = payload
            const routes = mapRoutes(state.userMenus)
            LocalCache.setCache('userMenus', payload)
            console.log(routes);
            routes.forEach((route: any) => {
                router.addRoute("main", route)
            })
        },
    },
    actions: {
        async accountLogin({ commit }, payload) {
            const loginResult = await accountLoginAction(payload)
            const { id, token } = loginResult.data
            LocalCache.setCache("token", token)
            commit("changeToken", token)
            const userResult = await requestUserInfoById(id)


            // commit("changeMenu", menuResult)
            const menuResult = await requestMenuByRoleId(userResult.data.role.id)
            commit("changeMenu", menuResult.data)
            LocalCache.setCache("menu", menuResult.data)

        },
        loadLocalLogin({ commit, dispatch }) {
            const token = LocalCache.getCache('token')
            // if (token) {
            //     commit('changeToken', token)
            //     // 发送初始化的请求(完整的role/department)
            //     dispatch('getInitialDataAction', null, { root: true })
            // }
            // const userInfo = LocalCache.getCache('userInfo')
            // if (userInfo) {
            //     commit('changeUserInfo', userInfo)
            // }
            const userMenus = LocalCache.getCache('menu')
            if (userMenus) {
                commit('changeMenu', userMenus)
            }
        }
    }
}


