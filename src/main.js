// 1.导入需要的包
import Vue from 'vue';
// 导入ElementUI包 及其 需要的css====>这个就需要sass编译器进行编译
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 导入Axios异步通信包
import axios from 'axios';
import VueAxios from 'vue-axios'

// 2. 扫描路由js配置
import {router} from './router';

// 3.导入App组件
import App from './App';

// 4.显式地安装ElementUI
Vue.use(ElementUI);
// 显式的安装 axios和VueAxios
Vue.use(VueAxios,axios);
//下面这种引入方式顺序错误!!!!!
//Vue.use(axios,VueAxios);
new Vue({
  el: '#app', //  ===> 这个app指的是 index.html中的 div app<----通过render将App.vue渲染到这里
  // 放入路由对象
  router,
  render: h => h(App), // ElementUI 渲染 =====================>这个App指定是组件App.vue
  // 以下都不需要了 只需要上面一行 使用element渲染
  // components: { App },
  // template: '<App/>'
})
