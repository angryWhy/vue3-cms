import { Module } from "vuex";
import { IRootState } from "..";
import { accountLoginAction, requestMenuByRoleId, requestUserInfoById } from '../../service/login/login';
import LocalCache from "../../utils/cache"

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
            userMenus: []
        }
    },
    mutations: {
        changeToken(state, token: string) {
            state.token = token
        },
        changeMenu(state, payload: any[]) {
            state.userMenus = payload
        },

    },
    actions: {
        async accountLogin({ commit }, payload) {
            const loginResult = await accountLoginAction(payload)
            const { id, token } = loginResult.data
            LocalCache.setCache("token", token)
            commit("changeToken", token)
            const userResult = await requestUserInfoById(id)
            console.log(userResult);

            // commit("changeMenu", menuResult)

            const menuResult = await requestMenuByRoleId(userResult.data.role.id)
            commit("changeMenu", menuResult.data)
            console.log(menuResult.data);
        }
    }
}

