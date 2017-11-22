<template>
    <div id="heard-box">
        <div class="content">
            <el-row>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <ul>
                            <li v-for="(val,index) in friendList" class="foot-list" :key="val.id">
                                <router-link :to="val.url">{{val.value}}</router-link>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-light">
                        <ul>
                            <li v-for="val in aboutDocuments" class="foot-list" :key="val.id">
                                <router-link to="">{{val}}-123456-</router-link>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <ul>
                            <li v-for="val in contactMe" class="foot-list" :key="val.id">
                                <router-link to="">{{val}}</router-link>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <p><img src="../assets/logo2.png" alt="" srcset="" width='160'></p>
                        <p><img src="../assets/footLogo.png" alt="" srcset="" width='160' height='160'></p>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
  name: "foot",
  data() {
    return {
      friendList: [
        { value: "丁香人才网", url: "www.baidu.com", id:0},
        { value: "文献求助", url: "www.sina.com", id:1 },
        { value: "乐思航官网", url: "www.4399.com", id:2 }
      ],
      aboutDocuments: ["相关文档", "什么是抄袭？", "关于抄袭的常见问题", "如何防止抄袭"],
      contactMe: [
        "联系我们",
        "网址：www.Papertime.cc",
        "邮箱：Miraclove@vip.qq.com",
        "QQ：250173319"
      ]
    };
  }
};
</script>
<style scoped>
.el-row {
  background: #324157;
}

.el-col {
  margin-top: 20px;
}

.grid-content:first-of-type p {
  margin-bottom: 10px;
}

.foot-list a {
  color: #999;
  text-decoration: none;
  line-height: 25px;
  font-size: 14px;
}

.foot-list:first-of-type a {
  color: #fff;
  font-weight: 600;
}
</style>
