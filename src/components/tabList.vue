<template>
  <el-menu default-active="1" class="el-menu-vertical-demo m-b-30" @select="handleSelect">
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
  name: "left",
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      switch (key) {
        case "1":
          this.$router.push("/handInPapers");
          break;
        case "2":
          this.$router.push("/submitPaper");
          break;
        case "3":
          this.$router.push({ path: "/viewReport", query: { selected: "2" } });
          break;
        case "4":
          this.$router.push("/newLibrary");
          break;
        case "5":
          this.$router.push({
            path: "/manageLibaray",
            query: { selected: "2" }
          });
          break;
        default:
          this.$router.push("/handInPapers");
          break;
      }
    }
  }
};
</script>
<style scoped>
.el-menu-vertical-demo {
  background: #fff;
}

.el-menu-item:first-of-type {
  margin-top: 30px;
}

.el-menu-item {
  background: #eef1f6;
  margin-top: 20px;
}
</style>
