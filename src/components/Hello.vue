<template>
  <div class="left-box">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-col :span="5">
            <el-menu default-active="2" class="el-menu-vertical-demo" @select="handleSelect">
              <el-menu-item index="1"><i class="el-icon-edit"></i>黏贴文本提交</el-menu-item>
              <el-menu-item index="2"><i class="el-icon-document"></i>上传文本提交</el-menu-item>
              <el-menu-item index="3"><i class="el-icon-upload2"></i>查看报告</el-menu-item>
              <el-menu-item index="4"><i class="el-icon-plus"></i>新建自建库</el-menu-item>
              <el-menu-item index="5"><i class="el-icon-setting"></i>管理自建库</el-menu-item>
            </el-menu>
          </el-col>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'left',
  data() {
    return {
      msg: '我是left页面'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      switch (key) {
        case 1:
          this.$router.push('/page1')
          break;
        case 2:
          this.$router.push('/page2')
          break;
        case 3:
          this.$router.push('/page3')
          break;
        default:
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
