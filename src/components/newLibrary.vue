<template>
    <div>
        <div class="libaray-title m-t-25">
            <p class="paper-title">论文标题</p>
            <el-input v-model="title" placeholder="请输入内容..." @change="change" class="m-t-10 f-l"></el-input>
            <span v-if='show' class="t-c m-t-10 m-l-10">{{msg}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'zijianku',
    data() {
        return {
            msg: "论文标题不能为空..",
            title: '',
            show: true
        }
    },
    methods: {
        change() {
            if (this.title != '') {
                this.show = false
            } else {
                this.show = true
            }
        }
    }
}
</script>
<style scoped>
.paper-title {
    text-align: left;
    font-size: 14px;
    color: #333;
}

.el-input {
    width: 70%
}

.libaray-title span {
    float: left;
    color: red;
    line-height: 36px;
    font-size: 14px;
}
</style>
