import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// import router from "@/router"
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
    //自定义属性指向vm上的方法
    //主要是$bus()和$emit()方法
  }
  // router
}).$mount('#app')
