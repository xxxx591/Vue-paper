<template>
    <div>
        <p>论文标题</p>
        <el-input v-model="title" placeholder="请输入内容..." @change="change"></el-input>
        <span v-if='show'>{{msg}}</span>
    </div>
</template>
<script>
export default {
    name: 'zijianku',
    data() {
        return {
            msg: "论文标题不能为空",
            title: '',
            show: false
        }
    }
}
</script>
<style scoped>

</style>
