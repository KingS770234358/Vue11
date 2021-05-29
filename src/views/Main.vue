<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1']">
          <!-- 侧边栏的第一部分 -->
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-caret-right"></i>用户管理</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <!-- 1.这里使用的是跟Main组件页面绑定的children路由-嵌套路由 -->
<!--                <router-link to="/user/profile">个人信息</router-link>-->
                <!-- 2.跳转的同时携带参数
                     - 一定要使用:to进行绑定
                     - 一定要在路由中定义路由的name,通过name来访问组件
                     - params为参数字典供请求的组件接收
                -->
                <router-link :to="{name: 'UserProfile', params:{id:1}}">个人信息路由取参</router-link>

              </el-menu-item>
              <el-menu-item index="1-2">
                <!-- 这里使用的是跟Main组件页面绑定的children路由-嵌套路由 -->
                <router-link :to="{name: 'UserProfileProps', params:{id:10}}">个人信息路由props取参</router-link>
              </el-menu-item>
              <el-menu-item index="1-3">
                <!-- 这里使用的是跟Main组件页面绑定的children路由-嵌套路由 -->
                <router-link to="/user/list">用户列表</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <!-- 这里使用的是跟Main组件页面绑定的children路由-嵌套路由 -->
                <router-link to="/goHome">回到首页</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 侧边栏的第二部分 -->
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-caret-right"></i>内容管理</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">分类管理</el-menu-item>
              <el-menu-item index="2-2">内容列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <!-- 除了侧边栏的右半部分主体的顶部栏 -->
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{name}}</span>
        </el-header>

        <!-- 除了侧边栏的右半部分的显示主题主体 -->
        <el-main>
          <!-- 写些信息表示没有出错 -->
          <h1>这是首页的主体</h1>
          <!-- 展示router-link请求得到的视图组件 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    export default {
        props:['name'],
        name: "Main"
    }
</script>

<style scoped lang="scss">
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  a {
    text-decoration: none; //去掉原有链接文字下划线
  }
  .el-aside {
    color: #333;
  }
</style>
