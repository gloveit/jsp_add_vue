
import App from './App.vue'
import Vue from 'vue'
import router from './router'
import store from './store'
import { Button, Modal } from 'ant-design-vue';

import './css/common.css'
import 'ant-design-vue/dist/antd.css';

import vSelectPeople from './config/selectPeople'

Vue.config.productionTip = false
Vue.prototype.vSelectPeople = vSelectPeople

Vue.use(Button)
  .use(Modal)

const vue = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

window.$Vue = vue
