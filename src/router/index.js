// 1.引入需要的依赖包
import Vue from 'vue';
// 这里可以不用VueRouter 直接Router即可
import Router from "vue-router";

// 2.引入路由跳转需要的视图组件
import Main from '../views/Main';
import Login from '../views/Login';
// 3.引入新增的跳转组件
import UserList from "../views/user/List";
import UserProfile from "../views/user/Profile";
// 4.引入新增的404页面组件
import NotFound from "../views/NotFound";

Vue.use(Router);

export let router = new Router({
  // 去掉url中的#号
  mode: 'history',
  // 这里配置好的路由 不一定要使用 router-link链接进行访问
  // 可以直接在浏览器的地址栏里输入访问
  routes:[
    {
      path: "/main/:name",
      props: true,
      // 注意这里要使用component 而不是 components
      component: Main,
      // 在Main组件的页面里 可以直接使用如下的url进行访问组件
      children:[
        // {path: '/user/profile',component: UserProfile},
        // 路由时接收参数
        {path: '/user/profile/:id',name:'UserProfile', component: UserProfile},
        // 可以开启props存储路由参数 props: true
        {path: '/user/profile/:id',name:'UserProfileProps', component: UserProfile, props: true},
        {path: '/user/list',component: UserList},
        {path: '/goHome',redirect: '/main'}
      ]
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: '',
      component: Login
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.length === 0) {
//     from.name ? next({
//       name: from.name
//     }) : next('/404');
//   } else {
//     next(); //如果匹配到正确跳转
//   }
// });
