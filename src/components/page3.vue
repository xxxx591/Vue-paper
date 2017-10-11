<template>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="title" label="标题" width="150">
        </el-table-column>
        <el-table-column prop="state" label="状态" width="120">
        </el-table-column>
        <el-table-column prop="result" label="检测结果" width="120">
        </el-table-column>
        <el-table-column prop="submissionTime" label="提交时间" width="120">
        </el-table-column>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
            <template scope="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">查看报告</el-button>
                <el-button size="small">在线改重</el-button>
                <el-button size="small">下载报告</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    methods: {
        handleClick(row) {
            console.log(row);
        }
    },
    data() {
        return {
            tableData: [
                { title: "论文检测", state: '检测完成', result: '相似度：50%', submissionTime: '2017年10月11日15:33:40' },
                { title: "论文检测", state: '检测完成', result: '相似度：50%', submissionTime: '2017年10月11日15:33:40' },
                { title: "论文检测", state: '检测完成', result: '相似度：50%', submissionTime: '2017年10月11日15:33:40' },
                { title: "论文检测", state: '检测完成', result: '相似度：50%', submissionTime: '2017年10月11日15:33:40' },
                { title: "论文检测", state: '检测完成', result: '相似度：50%', submissionTime: '2017年10月11日15:33:40' },
                { title: "论文检测", state: '检测完成', result: '相似度：50%', submissionTime: '2017年10月11日15:33:40' },
                { title: "论文检测", state: '检测完成', result: '相似度：50%', submissionTime: '2017年10月11日15:33:40' },
                { title: "论文检测", state: '检测完成', result: '相似度：50%', submissionTime: '2017年10月11日15:33:40' },]
        }
    }
}
</script>
<style scoped>
tbody{
    font-size: 12px;
}
td div {
    font-size: 12px;
}
</style>
