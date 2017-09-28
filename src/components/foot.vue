<template>
    <div id="heard-box">
        <div class="content">
            <el-row>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <ul>
                            <li v-for="(val,index) in friendList" class='foot-list'>
                                <router-link to="#" >{{val.value}}</router-link>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-light">
                        22
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        33
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        44
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name: 'foot',
    data() {
        return {
            friendList: [
                { value: '丁香人才网', url: 'www.baidu.com' },
                { value: '文献求助', url: 'www.sina.com' },
                { value: '乐思航官网', url: 'www.4399.com' }
            ],
            aboutDocuments: ['相关文档', '什么是抄袭？', '关于抄袭的常见问题', '如何防止抄袭'],
            contactMe: ['网址：www.Papertime.cc', '邮箱：Miraclove@vip.qq.com', 'QQ：250173319'],
        }
    },
}
</script>
<style scoped>
.el-row {
    margin-bottom: 20px;
}

.el-col {
    border-radius: 4px;
}
.foot-list a{
    color:#fff;
    text-decoration: none;
    line-height: 25px;
}
.foot-list:first-of-type{
    font-weight: 600;
}
</style>
