//配置路由
import Vue from "vue"
import VueRouter from "vue-router"
//使用插件
Vue.use(Vuerouter)
import home from "@/pages/home"
import search from "@/pages/search"
import login from "@/pages/login"
import register from "@/pages/register"
import search from "@/pages/search"

//引用路由首页
export default new VueRouter({
    routes:[{
        path:"./home",
        component:home
    },
    {
        path:"./search",
        component:search
    },
    {
        path:"./login",
        component:login
    },
    {
        path:"./register",
        component:register
    },
    {
        path:"./search",
        component:search
    }
]
})