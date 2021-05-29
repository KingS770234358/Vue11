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