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
                <div class="submit-btn">
                    <el-button type="primary" size="small" @click="dialogTableVisible = true">登录</el-button>
                    <el-button type="primary" size="small">注册</el-button>
                </div>
            </el-menu>
            <div class="login-box">
                <el-dialog id='dial' ref='dialog' title="用户登录" v-model="dialogTableVisible" class="dialog-box">
                    <el-row :gutter="20">
                        <el-col :span="20" :offset="2">
                            <div class="grid-content bg-purple" v-show="loginState">
                                <el-input placeholder="请输入账号..." class="login-ipt">
                                    <template slot="prepend">用户名</template>
                                </el-input>
                                <el-input placeholder="请输入密码..." class="password-ipt m-t-10">
                                    <template slot="prepend">密码</template>
                                </el-input>
                                <p class="forget-password" @click="changePassword">忘记密码？</p>
                                <p class="argument-remember-password">
                                    <el-checkbox v-model="checked">同意并遵守
                                        <span style="color:#0C7FE9">《服务条款》</span>
                                    </el-checkbox>
                                    <el-checkbox v-model="checked" style="float:right">记住密码</el-checkbox>
                                </p>
                                <p class="login-icon">
                                    <span>快速登录：</span>
                                    <i class="el-icon-fa-qq"></i>
                                    <i class="el-icon-fa-weixin"></i>
                                    <i class="el-icon-fa-weibo"></i>
                                </p>
                            </div>
                        </el-col>
                    </el-row>
                </el-dialog>
            </div>
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
            dialogTableVisible: false,
            loginState: true,
            checked: true
        }
    },
    methods: {
        handleSelect(key, keyPath) {
        },
        changePassword() {
            this.loginState = !this.loginState;
        }
    }
}
</script>
<style scoped>
a {
    text-decoration: none;
}

.el-menu-item {
    padding: 0 12px;
}

.el-menu-item img {
    width: 129px;
    height: 36px;
}

.el-submenu .el-menu-item {
    min-width: auto;
}

.submit-btn {
    height: 60px;
    line-height: 60px;
    float: right;
}

.dialog-box:first-of-type {
    width: 50%;
    left: 25%;
}

.login-box {
    text-align: left;
}

.login-ipt,
.password-ipt {
    margin: 10px 0;
}

.forget-password {
    color: #3CC8D6;
    text-align: right;
}

.grid-content p {
    margin-top: 10px;
}

.login-icon>i {
    margin: 0 5px;
    font-size: 1.4em!important;
    vertical-align: middle;
    border: 1px solid #D9D9D9;
    border-radius: 50%;
    padding: 8px;
    cursor: pointer;
}
.el-icon-fa-qq{color:#4DAFEA;}
.el-icon-fa-qq:hover{border-color:#4DAFEA;}
.el-icon-fa-weixin{color:#3EB135;}
.el-icon-fa-weixin:hover{border-color:#3EB135;}
.el-icon-fa-weibo{color:#DF4D69}
.el-icon-fa-weibo:hover{border-color:#DF4D69;}
</style>
