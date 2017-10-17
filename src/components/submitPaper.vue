<template>
    <div>
        <p class="remind">提醒：系统仅支持txt、doc、docx格式文档</p>
        <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple :file-list="fileList3" :on-change="handchange">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或
                <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="word">只能上传Word文件，且不超过5Mb</div>
        </el-upload>
        <el-button type="primary" size="large" class="m-b-20">确认上传</el-button>
    </div>
</template>
<script>
export default {
    name: 'lianxi',
    data() {
        return {
            fileTitle: '论文文档名称',
            fileList3: [{
                name: 'food.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
                status: 'finished'
            }, {
                name: 'food2.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
                status: 'finished'
            }]
        }
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handchange(file, fileList) {
            this.fileList3 = fileList.slice(-1);
        }
    }
}
</script>
<style scoped>
.remind {
    margin-top: 20px;
    text-align: left;
    vertical-align: middle;
    color: #0c7fe9;
    font-size: 14px;
}

.upload-demo {
    margin: 25px 0;
    float: left;
    padding-right: 160px;
}
</style>

