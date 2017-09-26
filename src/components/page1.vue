<template>
    <div>
        <p style="text-align:left;">
            <el-checkbox v-model="checked" class="self-built">自建库
                <span class="self-built-span">（选中后对比范围包括自建库）</span>
            </el-checkbox>
        </p>
        <p class="paper-p">论文标题
            <el-input v-model="title" placeholder="请输入内容..." @change="change" @blur="blur"></el-input>
            <span v-if='show'>{{msg}}</span>
        </p>
        <p class="paper-p">论文作者
            <el-input v-model="author" placeholder="请输入内容..."></el-input>
        </p>
    </div>
</template>
<script>
export default {
    name: 'lianxi',
    data() {
        return {
            msg: '标题不能为空',
            checked: false,
            title: '',
            author: '',
            show: true,
            
        }
    },
    methods: {
        change() {
            if (this.currentValue != '') {
                this.show = false
            }
        },
        blur(){
            console.log(this.title)
            if(this.title == ''){
                this.show = true
            }
        }
    }
}
</script>
<style scoped>
.self-built {
    margin-top: 20px;
    font-weight: 600;
}

.self-built-span {
    color: #FF0000;
}

.el-input {
    width: 65%;
    margin: 15px 0 15px 12px;
}

.paper-p {
    text-align: left;
    font-size: 14px;
}

.paper-p span {
    margin-left: 5px;
    color: #FF0000;
}
</style>
