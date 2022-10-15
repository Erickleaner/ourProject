<template>
  <div class="bg">
    <!-- 背景 -->
    <svg id="bg_svg" viewBox="0 0 1440 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <filter id="blur">
        <feGaussianBlur stdDeviation="5"></feGaussianBlur>
      </filter>
      <image :href="require('@/assets/img/login/login-bg.jpg')" width="1440" height="480" filter="url(#blur)"></image>
    </svg>
    <!-- 注册、登录表单 -->
    <div class="login-wrap">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="登录" name="/login">

        </el-tab-pane>
        <el-tab-pane label="注册" name="/register">

        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "ULogin",
  data(){
    return{
      activeName: '/login',
    }
  },
  methods:{
    handleClick(){

    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import "../css/style.scss";
//为了达到修改element-plus组件样式需要设置全局
</style>