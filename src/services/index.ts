import axiosRequest from "./request";

const request = new axiosRequest({
    baseURL:'',
    timeout:500,
    interceptors:{
        //拦截成功的
        requestInterceptor:(config)=>{
            return config
        },
        //拦截失败的
        requestInterceptorCatch:(err)=>{
            return err
        },
        //响应成功
        responseInterceptor:(config)=>{
            return config
        },
        //响应失败
        resopnseInterceptorCatch(err) {
            return err
        },
    }
})