# ElementUI的使用
1.创建项目11vueelementui 
  vue init webpack 11vueelementui
2.创建项目的时候可以直接npm install
3.进入项目目录
4.使用如下命令安装elementUI
npm i element-ui -S
5.安装SASS加载器 [上面提过 是一种生成css的编译器]
cnpm install sass-loader node-sass --save-dev
warning可以忽略

### npm命令解释
· npm install moduleName : 安装模块到当前目录下
· npm install -g moduleName : -g 将模块安装到全局,具体安装到哪里要看npm config prefix的设置
· npm install --save moduleName : --save将模块安装到项目目录下;
  并且在package文件的dependencies节点写入该依赖,-S为该命令的缩写
· npm install --save-dev moduleName : --save-dev的意思是将模块安装到项目目录下;
  并在package文件的 devDependencies节点写入该依赖,-D为该命令的缩写

6.运行测试
  npm run dev

### 前端
前端目前分为两大应用
· 类似elementUI的桌面化应用
· 弹窗 常用Layer弹窗独立组件实现

7.通过IDEA打开项目
· 先删除默认生成的东西 logo.png HelloWorld.vue; 在再剩下的资源里面删除它们的引用
· 创建路由文件夹router
  创建views文件夹用于存放视图的组件
  原有的components文件夹用于存放功能性的组件
· 在views下创建视图组件
  Main.vue主页面  
  Login.vue登录页面:https://blog.kuangstudy.com/index.php/archives/626/
  (从博客上取下Login.vue页面的代码[概览代码]
      onSubmit(formName) {
          // 引用上面定义的表单 为它绑定验证功能
          // element的表单的验证方法
          this.$refs[formName].validate((valid) => {
              if (valid) {
                  // 这里跳转页面 验证成功即可跳转至 /main对应的组件页面
                  // 使用 vue-router 路由到指定页面，该方式称为编程式导航
                  this.$router.push("/main");
              } else {
                  // 验证失败的话 显示错误信息
                  this.dialogVisible = true;
                  return false;
              }
          });
      }
· router文件夹下配置路由index.js[由于创建文件的时候没有引入vue-router需要手动npm install vue-router]
    mode: 'history',  // 去掉url中的#号
    routes:[
      {
        path: "/main",
        // 注意这里要使用component 而不是 components
        component: Main
      }]
· 在入口文件中引入router配置文件index中的router
  然后放入Vue实例中
  // 1.导入需要的包
  import Vue from 'vue';
  // 导入ElementUI包 及其 需要的css====>这个就需要sass编译器进行编译
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  
  // 2. 扫描路由js配置
  import {router} from './router';
  
  // 3.导入App组件
  import App from './App';
  
  // 4.显式地安装ElementUI
  Vue.use(ElementUI);
  
  new Vue({
    el: '#app',
    // 放入路由对象
    router,
    render: h => h(App), // ElementUI 渲染
    // 6.以下都不需要了 只需要上面一行 使用element渲染
    // components: { App },
    // template: '<App/>'
  })
· 在App.vue总的页面展示组件中配置链接 
  router-link 
  router-view[用于展示组件,不论是浏览器地址访问请求到的组件 还是点击router-linker请求到的组件都会放在这里
  因此,App.vue中若没有这个标签 内容将无处展示]
· 终端运行 npm run dev 
  [报错:]Module build failed: TypeError: this.getResolve is not a function
  [解决方法:]package.json中devDependencies节点降低sass的sass-loader版本至7.3.1
            ===> [需要重新npm install] 出错的话需要npm audit fix
            ===>[如果还是不行尝试使用cnpm进行安装]
  直接访问是空白的 因为link-view中一开始默认没有视图
  需要访问 localhost:8080/login [mode: 'history' 因此不需要#即可访问]

### 有机会可以学习 docsify 生成文档的工具
