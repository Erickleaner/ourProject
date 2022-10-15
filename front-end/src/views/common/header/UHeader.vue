<template>
<div>
  <div class="header-area between-arrange">
    <a class="nav-brand" href="/">硕果云</a>
    <div class="horizontal-arrange">
      <el-menu
          :default-active="activeIndex"
          :ellipsis="false"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
      >
        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item index="/index">考试</el-menu-item>
        <el-menu-item index="/course">课程</el-menu-item>
        <el-sub-menu index="/other">
          <template #title>记录</template>
          <el-menu-item index="4-1">考试记录</el-menu-item>
          <el-menu-item index="4-2">错题本</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>帮助</template>
          <el-menu-item index="4-1">源码地址</el-menu-item>
          <el-menu-item index="4-2">管理后台</el-menu-item>
        </el-sub-menu>
      </el-menu>
      <div>
        <div class="link-two">
          <a target="_blank" @click="open('/login')">登录</a>
          <a target="_blank" @click="open('/register')">注册</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "UHeader",
  components: {},
  data(){
    return{
      activeIndex:"1"
    }
  },
  methods:{
    handleSelect(){
      alert('Chosen')
    },
    open(path){
      if (path !== this.$route.fullPath) {
        this.$router.push(path)
      }
    }
  }
}
</script>

<style scoped>
@import "@/views/common/header/style";
</style>