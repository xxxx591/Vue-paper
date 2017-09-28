<template>
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
</template>
<script>
export default {
  name: 'left',
  data() {
    return {
    }
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
<style scoped>
.left-box {
  margin-top: 35px;
}

.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
