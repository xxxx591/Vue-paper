<template>
  <div id="app">
    <heard-tab></heard-tab>
    <div class="content content-top">
      <el-row :gutter="20">
        <el-col :span="16" style="background:#fff;">
          <div class="grid-content bg-purple">
            <el-col :span="5">
              <el-menu default-active="1" class="el-menu-vertical-demo" @select="handleSelect">
                <el-menu-item index="1">
                  <i class="el-icon-edit"></i>黏贴文本提交</el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-document"></i>上传文本提交</el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-upload2"></i>查看报告</el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-plus"></i>新建自建库</el-menu-item>
                <el-menu-item index="5">
                  <i class="el-icon-setting"></i>管理自建库</el-menu-item>
              </el-menu>
            </el-col>
            <el-col :span="16">
              <router-view></router-view>
            </el-col>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import HeardTab from '@/components/heard'
export default {
  name: 'app',
  components: {
    HeardTab
  },
  methods: {
    handleSelect(key, keyPath) {
      switch (key) {
        case '1':
          this.$router.push('/page1')
          break;
        case '2':
          this.$router.push('/page2')
          break;
        case '3':
          this.$router.push('/page3')
          break;
        case '4':
          this.$router.push('/page4')
          break;
        case '5':
          this.$router.push('/page5')
          break;
        default:
        this.$router.push('/page1')
          break;
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #f5f5f5;
}

.content {
  width: 1200px;
  margin: 0 auto;
}
.content-top{
  margin-top: 35px;
}
</style>
