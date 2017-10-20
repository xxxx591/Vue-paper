<template>
    <div>
        <div class="libaray-title m-t-30">
            <p>选择：<span>全选</span> - <span>反选</span> - <span>删除</span></p>
        </div>
         <el-table :data="tableData" border style="width: 100%" class="m-t-25" stripe>
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column fixed prop="title" label="标题" width="300">
            </el-table-column>
            <el-table-column prop="state" label="状态" width="120">
            </el-table-column>
            <el-table-column prop="result" label="检测结果" width="160">
            </el-table-column>
            <el-table-column prop="submissionTime" label="提交时间" width="220">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="200px">
                <template scope="scope">
                    <el-button size="small" type="primary">查看</el-button>
                    <el-button size="small" type="primary">预览</el-button>
                    <el-button size="small" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination-footer m-t-10 m-b-10">
            <span class="description">{{description}}</span>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="tpageSize" layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
  name: "zijianku",
  data() {
    return {
      msg: "论文标题不能为空",
      title: "",
      show: false,
      tableData: [
        {
          title: "论文检测",
          state: "检测完成",
          result: "相似度：50%",
          submissionTime: "2017年10月11日15:33:40"
        },
        {
          title: "论文检测",
          state: "检测完成",
          result: "相似度：50%",
          submissionTime: "2017年10月11日15:33:40"
        },
        {
          title: "论文检测",
          state: "检测完成",
          result: "相似度：50%",
          submissionTime: "2017年10月11日15:33:40"
        },
        {
          title: "论文检测",
          state: "检测完成",
          result: "相似度：50%",
          submissionTime: "2017年10月11日15:33:40"
        },
        {
          title: "论文检测",
          state: "检测完成",
          result: "相似度：50%",
          submissionTime: "2017年10月11日15:33:40"
        }
      ],
      currentPage: 1,
      tpageSize: 10,
      totalCount: 5
    };
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
    }
  },
  props: {
    columns: Array, //表格列配置数据,{vlaue:对应数据对象中的属性，label：对应的是标题文字，className：对应的是列的样式类名}
    // totalCount: Number, //表格数据总数
    pageSizes: Array, //决定每页显示的条数[10,15,20,25]
    checkBox: Boolean, //决定是否显示复选框
    description: String, //分页脚底左侧的数据说明
    tableHeight: Number, //分页列表的高度
    pageSize: Number,
    sortChange: Function //用户点击列表头进行排序 { column, prop, order }
  }
};
</script>
<style scoped>
.libaray-title {
  font-size: 14px;
  text-align: left;
}
.libaray-title span {
  cursor: pointer;
  color: #0c7fe9;
}
.libaray-title span:hover {
  text-decoration: underline;
}
</style>
