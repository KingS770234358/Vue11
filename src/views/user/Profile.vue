<template>
  <!-- 这里注意不能把{{$route.params.id}}等数据写在template标签根下 必须使用div等标签包起来 -->
  <div>
    <h1>个人信息</h1>
    <!-- 从路由参数存储里取参 -->
    从路由参数存储里取参:{{$route.params.id}}<br/>
    <!-- 直接从路由的props中取参 -->
    直接从路由的props中取参:{{id}}
  </div>

</template>

<script>
    export default {
        // 注册参数 可以直接从路由的props中取参
        props: ['id'],
        name: "UserProfile",
        beforeRouteEnter:(to,from,next)=>{
            console.log("进入路由/该组件之前");
            // 获得vm实例
            next(vm => {
                // 执行vm实例的加载数据方法
                vm.getData(); // 进入这个路由/组件页面之前加载数据
            });
            //继续执行下一个
        },
        beforeRouteLeave:(to,from,next)=>{
            console.log("离开路由/该组件之前");
            next(); //继续执行下一个
        },
        methods:{
            getData:function(){
                this.axios({
                    methods: 'get',
                    url: 'http://localhost:8080/static/mock/data.json',
                }).then(function (response) {
                    console.log(response);
                })
                // 这样只能执行一步简单的操作
                //  .then(response=>(
                //     console.log(response)
                // ))
            }
        }
    }
</script>

<style scoped>

</style>
