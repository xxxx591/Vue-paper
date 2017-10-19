<template>
    <div>
        <div class="libaray-title m-t-25">
            <p class="paper-title">论文标题</p>
            <el-input v-model="title" placeholder="请输入内容..." @change="change" class="m-t-10 f-l"></el-input>
            <span v-if='show' class="t-c m-t-10 m-l-10">{{msg}}</span>
        </div>
        <el-input type="textarea" :autosize="autoSize" placeholder="喜迎十九大，建设美好中国！" class="m-t-15">
        </el-input>
        <div class="submit-file m-t-60 ">
            <p class="m-b-10 remind">提醒：系统仅支持txt、doc、docx格式文档</p>
            <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple :file-list="fileList3" :on-change="handchange">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或
                    <em>点击上传</em>
                </div>
                <div class="el-upload__tip" slot="word">只能上传Word文件，且不超过5Mb1a1a1aa11.</div>
            </el-upload>
        </div>
          <el-button type="primary" size="large" class="m-b-20 m-t-15">确认上传</el-button>
    </div>
</template>
<script>
export default {
    name: 'zijianku',
    data() {
        return {
            msg: "论文标题不能为空..",
            title: '',
            show: true,
            autoSize: { minRows: 4, maxRows: 10 },
            fileTitle: '论文文档名称',
            fileList3: [{
                name: 'food.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
                status: 'finished'
            }, {
                name: 'food2.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
                status: 'finished'
            }],
        }
    },
    methods: {
        change() {
            if (this.title != '') {
                this.show = false
            } else {
                this.show = true
            }
        },
        handchange(file, fileList) {
            this.fileList3 = fileList.slice(-1);
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

.remind {
    vertical-align: middle;
    color: #0c7fe9;
    font-size: 14px;
}
</style>
