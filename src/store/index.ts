import { createStore } from "vuex";
import {loginModule} from "./login/login";
export interface IRootState{
  name:string,
  age:number
}
export default createStore<IRootState>({
 
  state: {
    name:"code",
    age:20
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    loginModule
  },
});
