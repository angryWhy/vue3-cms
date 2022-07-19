import { Module } from "vuex";
import { IRootState } from "..";
import { accountLoginAction } from '../../service/login/login';
interface ILoginState{
    token:string,
    userInfo:any
}
export const loginModule:Module<ILoginState,IRootState> = {
    namespaced:true,
    state() {
        return {
            token:"",
            userInfo:""
        }
    },
    actions:{
       async accountLogin({commit},payload){
           const loginResult = await accountLoginAction(payload)
            console.log(loginResult);
        }
    }
}
 
