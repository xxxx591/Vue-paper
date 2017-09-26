<template>
    <div id="heard-box">
        <div class="content">
            <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="0">
                    <img src="../assets/logo2.png" alt="" srcset="">
                </el-menu-item>
                <el-menu-item index="1">文献搜索</el-menu-item>
                <el-menu-item index="2" class="default-active">
                    <a href="#">论文查重</a>
                </el-menu-item>
                <el-menu-item index="3">
                    <a href="#">查看报告</a>
                </el-menu-item>
                <el-menu-item index="4">
                        <a href="#">在线改重</a>
                </el-menu-item>
                <el-menu-item index="5">
                    <a href="#">个人中心</a>
                </el-menu-item>
                <el-menu-item index="6">
                    <a href="#">充值中心</a>
                </el-menu-item>
                <el-menu-item index="7">
                    <a href="#">免费检测</a>
                </el-menu-item>
                <el-menu-item index="8">
                    <a href="#">推广活动</a>
                </el-menu-item>
                <el-menu-item index="9">
                    <a href="#">免费使用</a>
                </el-menu-item>
                <el-submenu index="10">
                    <template slot="title">关于我们</template>
                    <el-menu-item index="10-1">首页</el-menu-item>
                    <el-menu-item index="10-2">真伪查询</el-menu-item>
                    <el-menu-item index="10-3">新闻资讯</el-menu-item>
                    <el-menu-item index="10-3">使用帮助</el-menu-item>
                    <el-menu-item index="10-3">诚招代理</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
    </div>
</template>
<script>
export default {
    name: 'heard',
    data() {
        return {
            msg: '你好我是头部',
            activeIndex: '2',
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<style scoped>
a {
    text-decoration: none;
}
#heard-box{
    background:#324157;
}
.el-menu-item{
    padding:0 12px;
}
.el-menu-item img{
    width: 129px;
    height: 36px;
}
.el-submenu .el-menu-item{
    min-width:auto;
}
</style>
