<template>
    <div id="heard-box">
        <div class="content">
            <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="0">
                    <img src="../assets/logo2.png" alt="" srcset="">
                </el-menu-item>
                <el-menu-item index="1"><a href="http://www.papertime.cc/doc_search.html">文献搜索</a></el-menu-item>
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
                    <el-menu-item :index="10-index" v-for="(val,index) in tableList" :key="index">{{val}}</el-menu-item>
                </el-submenu>
                <div class="submit-btn">
                    <el-button type="primary" size="small" @click="dialogTableVisible = true ; loginState = true; signInState = false; msg = '用户登录'">登录</el-button>
                    <el-button type="primary" size="small" @click="dialogTableVisible = true ; loginState = false; signInState = true; msg = '用户注册'">注册</el-button>
                </div>
            </el-menu>
            <div class="login-box">
                <el-dialog id='dial' ref='dialog' :title="msg" v-model="dialogTableVisible" class="dialog-box">
                    <el-row :gutter="20">
                        <el-col :span="20" :offset="2">
                            <div class="login-interface" v-show="loginState">
                                <el-input placeholder="请输入账号..." class="login-ipt m-t-15">
                                    <template slot="prepend">用户名</template>
                                </el-input>
                                <el-input placeholder="请输入密码..." class="password-ipt m-t-15">
                                    <template slot="prepend">密码</template>
                                </el-input>
                                <p class="forget-password" @click="changePassword">忘记密码？</p>
                                <p class="argument-remember-password m-t-15">
                                    <el-checkbox v-model="checked">同意并遵守
                                        <span style="color:#0C7FE9">《服务条款》</span>
                                    </el-checkbox>
                                    <el-checkbox v-model="checked2" style="float:right">记住密码</el-checkbox>
                                </p>
                                <p class="login-icon m-t-15">
                                    <span>快速登录：</span>
                                    <i class="el-icon-fa-qq"></i>
                                    <i class="el-icon-fa-weixin"></i>
                                    <i class="el-icon-fa-weibo"></i>
                                </p>
                                <p class="login-btn m-t-15">
                                    <el-button type="primary">登录</el-button>
                                </p>
                                <p class="forget-password m-t-15" @click="signIn">立即注册</p>
                            </div>
                            <div class="login-interface" v-show="signInState">
                                <p class="login-icon m-t-15">
                                    <span>快速登录：</span>
                                    <i class="el-icon-fa-qq"></i>
                                    <i class="el-icon-fa-weixin"></i>
                                    <i class="el-icon-fa-weibo"></i>
                                </p>
                                <el-input v-model="signInPhone" placeholder="请输入手机号码" @blur="change"></el-input>
                                <el-input v-model="signInPassWord" placeholder="请输入密码" @blur="change1"></el-input>
                                <el-input placeholder="请再次输入密码"></el-input>
                                <div class="signin-phone-box">
                                    <el-input placeholder="请输入手机号码"></el-input>
                                    <el-button type="primary">点击获取验证码</el-button>
                                </div>
                                <p class="icon-sign" v-show="iconSignState"><i class="el-icon-close" ></i>{{msg2}}</p>
                                <p class="icon-sign" v-show="iconSignState2"><i class="el-icon-close" ></i>{{msg2}}</p>
                                <p class="argument-remember-password m-t-15">
                                    <el-checkbox v-model="checked">同意并遵守
                                        <span style="color:#0C7FE9">《服务条款》</span>
                                    </el-checkbox>
                                </p>
                                <p class="login-btn m-t-15">
                                    <el-button type="primary">立即注册</el-button>
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
            msg: '用户登录',
            msg2: '请填写正确的手机号',
            activeIndex: '2',
            dialogTableVisible: false,
            loginState: true,
            signInState: false,
            checked: true,
            checked2: true,
            signInPhone: '',
            signInPassWord: '',
            iconSignState:false,
            iconSignState2:false,
            tableList:["首页","真伪查询","新闻资讯","使用帮助","诚招代理"]
        }
    },
    methods: {
        change() {
            if (this.signInPhone != '') {
                this.iconSignState = false
            } else {
                this.iconSignState = true
                this.iconSignState2 = false
                this.msg2 = '请填写正确的手机号'
            };
        },
        change1() {
            if (this.signInPassWord != '') {
                this.iconSignState2 = false
            } else {
                this.iconSignState2 = true;
                this.iconSignState = false;
                this.msg2 = '密码不能为空'
            }
        },
        handleSelect(key, keyPath) {

        },
        changePassword() {

        },
        signIn() {
            this.msg = '用户注册';
            this.loginState = false;
            this.signInState = true;
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
    cursor: pointer;
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

.el-icon-fa-qq {
    color: #4DAFEA;
}

.el-icon-fa-qq:hover {
    border-color: #4DAFEA;
}

.el-icon-fa-weixin {
    color: #3EB135;
}

.el-icon-fa-weixin:hover {
    border-color: #3EB135;
}

.el-icon-fa-weibo {
    color: #DF4D69
}

.el-icon-fa-weibo:hover {
    border-color: #DF4D69;
}

.login-btn button {
    width: 100%;
}

.el-input {
    margin: 10px 0;
}

.signin-phone-box {
    position: relative;
}

.signin-phone-box button {
    position: absolute;
    right: 0;
    top: 10px;
}
.icon-sign{
    color: red;
}
.icon-sign i {
    font-size: 12px;
    display: inline-block;
    border: 1px solid;
    border-radius: 50%;
    padding: 3px;
    color: white;
    background: red;
}
</style>
