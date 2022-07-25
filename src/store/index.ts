import { createStore, Store, useStore as useVuex } from "vuex";
import { ILoginState } from "./login/login";
import { loginModule } from "./login/login";
import { systemModule, ISystemState } from './main/system/system';
export interface IRootState {
  token: string,
}
interface IRootWithModule {
  loginModule: ILoginState
  systemModule: ISystemState
}
type IStoreType = IRootState & IRootWithModule

const store = createStore<IRootState>({

  state: {
    token: ""
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    loginModule,
    systemModule
  },
});
export function useStore(): Store<IStoreType> {
  return useVuex()
}
export function setupStore() {
  store.dispatch("loginModule/loadLocalLogin")
}
export default store
