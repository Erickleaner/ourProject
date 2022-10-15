<template>
  <div class="footer">
    <div class="container">
      <div class="site-info">
        <el-row>
          <el-col :span="4" :offset="2" class="footer-col">
            <h4>链接</h4>
            <a target="_blank" href="https://gitee.com/wells2333/spring-microservice-exam">码云</a>
            <a target="_blank" href="https://github.com/">GITHUB</a>
            <a target="_blank" href="http://118.25.138.130:81">管理后台</a>
            <a target="_blank" href="https://gitee.com/wells2333/spring-microservice-exam/blob/master/CHANGELOG.md">更新日志</a>
          </el-col>
          <el-col :span="4" class="footer-col">
            <h4>工具</h4>
            <a target="_blank" href="http://element-cn.eleme.io">Element Ui</a>
            <a target="_blank" href="https://cn.vuejs.org/">Vue</a>
          </el-col>
          <el-col :span="4" class="footer-col">
            <h4>社区</h4>
            <a target="_blank" href="https://www.kancloud.cn/tangyi/spring-microservice-exam/1322864">看云</a>
            <a target="_blank" href="https://gitee.com/wells2333/spring-microservice-exam/issues">反馈建议</a>
          </el-col>
          <el-col :span="7" class="footer-col">

            <div class="we-chat-new">
              加入技术交流群，请扫二维码
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="line"></div>

      <el-row :gutter="20" style="margin-top: 50px;">
        <el-col :span="12" :offset="8">
          <div class="copyright">
            <h4 class="content-c2" style="text-align: center;">Copyright ©2019</h4>
            <ul class="privacy">
              <li class="content-c1"><a class="content-c0" @click="openLayer">法律声明</a></li>
              <li class="content-c1"><a class="content-c0" @click="openPrivacy">隐私条款</a></li>
              <li class="content-c1"><a class="content-c0" target="_blank" href="https://gitee.com/wells2333/spring-microservice-exam">开发者中心</a></li>
            </ul>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <div class="cop">
            <a class="content-c3" href="https://gitee.com/wells2333" target="_blank">
              <span>粤ICP备18038322号</span>
            </a>
          </div>
        </el-col>
      </el-row>

    </div>
  </div>
</template>
<script>
export default {
  name:'UFooter',
  data () {
    return {
    }
  },
  methods: {
    openLayer () {
      this.$notify.info({
        title: '法律声明',
        message: '此仅为个人练习开源模仿项目，仅供学习参考，承担不起任何法律问题',
        offset: 70
      })
    },
    openPrivacy () {
      this.$notify.info({
        title: '隐私条款',
        message: '本网站将不会严格遵守有关法律法规和本隐私政策所载明的内容收集、使用您的信息',
        offset: 70
      })
    }
  },
  components: {}
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import 'style.scss';
</style>
