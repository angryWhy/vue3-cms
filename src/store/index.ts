import { createStore, Store, useStore as useVuex } from "vuex";
import { ILoginState } from "./login/login";
import { loginModule } from "./login/login";
export interface IRootState {
  token: string,
}
interface IRootWithModule {
  loginModule: ILoginState
}
type IStoreType = IRootState & IRootWithModule

export default createStore<IRootState>({

  state: {
    token: ""
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    loginModule
  },
});
export function useStore(): Store<IStoreType> {
  return useVuex()
}
