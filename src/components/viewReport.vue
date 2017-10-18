<template>
    <div>
        <el-table :data="tableData" border style="width: 100%" class="m-t-25" stripe="true">
            <el-table-column fixed prop="title" label="标题" width="300">
            </el-table-column>
            <el-table-column prop="state" label="状态" width="120">
            </el-table-column>
            <el-table-column prop="result" label="检测结果" width="160">
            </el-table-column>
            <el-table-column prop="submissionTime" label="提交时间" width="220">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="350px">
                <template scope="scope">
                    <el-button size="small" type="primary">查看报告</el-button>
                    <el-button size="small" type="primary">在线改重</el-button>
                    <el-button size="small" type="primary">下载报告</el-button>
                    <el-button size="small" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination-footer">
            <span class="description">{{description}}</span>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="tpageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalCount">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                { title: "论文检测", state: '检测完成', result: '相似度：50%', submissionTime: '2017年10月11日15:33:40', author: '谢沅航', lover: '文乐' },
                { title: "论文检测", state: '检测完成', result: '相似度：50%', submissionTime: '2017年10月11日15:33:40', author: '谢沅航', lover: '文乐' },
                { title: "论文检测", state: '检测完成', result: '相似度：50%', submissionTime: '2017年10月11日15:33:40', author: '谢沅航', lover: '文乐' },
                { title: "论文检测", state: '检测完成', result: '相似度：50%', submissionTime: '2017年10月11日15:33:40', author: '谢沅航', lover: '文乐' },
                { title: "论文检测", state: '检测完成', result: '相似度：50%', submissionTime: '2017年10月11日15:33:40', author: '谢沅航', lover: '文乐' },
                { title: "论文检测", state: '检测完成', result: '相似度：50%', submissionTime: '2017年10月11日15:33:40', author: '谢沅航', lover: '文乐' },
                { title: "论文检测", state: '检测完成', result: '相似度：50%', submissionTime: '2017年10月11日15:33:40', author: '谢沅航', lover: '文乐' },
                { title: "论文检测", state: '检测完成', result: '相似度：50%', submissionTime: '2017年10月11日15:33:40', author: '谢沅航', lover: '文乐' },
                { title: "论文检测", state: '检测完成', result: '相似度：50%', submissionTime: '2017年10月11日15:33:40', author: '谢沅航', lover: '文乐' },
                { title: "论文检测", state: '检测完成', result: '相似度：50%', submissionTime: '2017年10月11日15:33:40', author: '谢沅航', lover: '文乐' },
                { title: "论文检测", state: '检测完成', result: '相似度：50%', submissionTime: '2017年10月11日15:33:40', author: '谢沅航', lover: '文乐' },
            ],
            currentPage: 1,
            tpageSize: 10,
            totalCount:11,
        }
    },
    methods: {
        changeSize: function() {
            this._data.tpageSize = this.pageSize;
        },
        handleSizeChange: function(size) {
            this.$emit("pageSizeChange", size);

        },
        handleCurrentChange: function(currentPage) {
            this.$emit("currentPageChange", currentPage);
        },
        selectionChange: function(selections) {
            this.$emit("selectionChange", selections);
        },
        
    },
    props: {
        columns: Array,      //表格列配置数据,{vlaue:对应数据对象中的属性，label：对应的是标题文字，className：对应的是列的样式类名}
        totalCount: Number,  //表格数据总数
        pageSizes: Array,    //决定每页显示的条数[10,15,20,25]
        checkBox: Boolean,  //决定是否显示复选框
        description: String, //分页脚底左侧的数据说明
        tableHeight: Number,  //分页列表的高度
        pageSize: Number,
        sortChange: Function //用户点击列表头进行排序 { column, prop, order }

    },
}
</script>
<style scoped>
tbody {
    font-size: 12px;
}

td div {
    font-size: 12px;
}
</style>
