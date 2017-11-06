<template>
    <div>
        <el-table :data="tableData" border style="width: 100%" class="m-t-25" stripe highlight-current-row>
            <el-table-column type="selection" width="55"></el-table-column>></el-table-column>
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
        <div class="pagination-footer m-t-10 m-b-10">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="pageSize1" 
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableList">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        pageSize1:[10,20,30,40],
        tableData: [],
        allList:[],
        currentPage4: 1,
        tableList:1,
        num:1,
        i:1,
    };
  },
  created() {
    axios
      .get(
        "https://www.easy-mock.com/mock/59ffd36ca3412760ce85ee97/example/data1"
      )
      .then(response => {
          //数字arr.filter方法
        //   var limit = (arr,page) =>arr.filter((r,i) => i >= page * 10 && i < page *10 +10 )
        //   利用数组切割的方法，获取指定数量的数据，并返回至页面，并通过变量设置返回条数
        let i = 0
        this.allList = response.data.data.hotkey
        this.tableData = response.data.data.hotkey.slice(i , (i+1) * 10);
        this.tableList = response.data.data.hotkey.length
        console.log(this.tableData);
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.i = val/10;
          this.tableData = this.allList.slice(0,this.i * 10);
          this.tableList = this.allList.length
        console.log(this.tableData);
    },
    handleCurrentChange(val) {
        this.num = val ;
          this.tableData = this.allList.slice((val-1) * this.i * 10 , val * this.i * 10);
          this.tableList = this.allList.length
        console.log(this.tableData);
    }
  },

};
</script>
<style scoped>
tbody {
  font-size: 12px;
}

td div {
  font-size: 12px;
}
</style>
