import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.less'
import App from './App.vue'
import router from './router'

// 注册全局组件
import My360nav from '@/components/my-360nav'
Vue.component('my-360nav', My360nav)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
