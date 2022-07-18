import axios, { AxiosResponse } from "axios";
import { AxiosInstance,AxiosRequestConfig } from "axios";
import { ElLoading } from "element-plus";
interface Irequest{
    requestInterceptor?:(config:AxiosRequestConfig)=>AxiosRequestConfig
    requestInterceptorCatch?:(err:any)=>any
    responseInterceptor?:(res:AxiosResponse)=>AxiosResponse
    resopnseInterceptorCatch?:(err:any)=>any
}
interface Iconfig extends AxiosRequestConfig{
    interceptors?:Irequest
    loading?:Boolean
}
class request {
    instance:AxiosInstance
    loading: any;
    constructor(config: Iconfig){
        this.instance = axios.create(config)
        this.instance.interceptors.request.use(config=>{
            //响应token拦截
            const token = ''
            if(token){
                // config.headers.Authorization = `Bearer ${token}`
            }
            setTimeout(() => {
                
            }, 1000);
            this.loading = ElLoading.service({
                lock:true,
                text:"正在请求数据",
                background: "rgba(0,0,0,0.5)"
            })
            return config
        },err=>{
            return err
        })
        this.instance.interceptors.response.use(res=>{
            this.loading?.close()
            return res
        },err=>{
            return err
        })
    }
    
}
export default request