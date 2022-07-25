import { getPageList } from "@/service/main/main";
import { Module } from "vuex"
import { IRootState } from '../../index';
export interface ISystemState {
    userList: any[]
    userCount: number
}
export const systemModule: Module<ISystemState, IRootState> = {
    namespaced: true,
    state() {
        return {
            userList: [],
            userCount: 0
        }
    },
    mutations: {
        changeUserList(state, payload) {
            state.userList = payload
        },
        changeUserCount(state, payload) {
            state.userList = payload
        }
    },
    actions: {
        async getPageListAction({ commit }, payload) {
            const pageResult = await getPageList(payload.url, payload.queryInfo)
            const { list, totalCount } = (pageResult as any).data
            commit("changeUserList", list)
            commit("changeUserCount", totalCount)
        }
    }

}