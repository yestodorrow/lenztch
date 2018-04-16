// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'

// 入口
import App from './App'//入口


//样式 
import './plugins/default.css'//引入默认样式，这里修改对全局默认样式有效，如需要更改非全局样式，请在单页面style添加coped(局部生效)来更改，将来考虑不同主题


// 路由
import router from './router'//引入路由管理系统，所有路由操作统一到这里

// 数据
import store from './store'//引入数据管理系统，所有数据有关操作统一到这里处理

// //土司
// import  { ToastPlugin } from 'vux'
// Vue.use(ToastPlugin)

//toast

import { Toast } from 'mint-ui';

//cookie
import VueCookie from 'vue-cookie' //处理从原生来的数据gps,province
Vue.use(VueCookie);


// 筛选弹窗
import { Popup } from 'mint-ui';// 考虑将来按需加载，不在首页引用
Vue.component(Popup.name, Popup);

// 搜索条

import { Search } from 'mint-ui';//考虑将来按需加载，不在首页引用

Vue.component(Search.name, Search);
// 样式


FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
