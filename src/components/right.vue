<template>
    <div class="right-box">
        <el-row :gutter="20">
            <div class="grid-content bg-purple">
                <div class="block">
                    <el-carousel height="200px" indicator-position="outside" trigger="click" :autoplay=autoplay>
                        <el-carousel-item v-for="(item,index) in imgSrc" :key="index">
                            <img :src="item" :alt="index+1" srcset="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <dl>
                    <dt>数据库范围.</dt>
                    <dd>学术期刊，学位论文，会议论文，互联网，英文数据库（涵盖期刊，硕博，会议的英文数据）。</dd>
                    <dt>检测范围</dt>
                    <dd>涵盖所有中英文类别，包括哲学、经济学、管理学、法学、社会科学、教育学、文学、艺术学、历史学、理学、工学、农学、医学、政治学、军事学等。</dd>
                    <dt>郑重声明</dt>
                    <dd>PaperTime论文时间检测系统遵守相关保密规定，绝不收录和泄露您送检文档的任何信息，请放心检测！</dd>
                </dl>
            </div>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'right',
    data() {
        return {
            msg: '我是right页面',
            autoplay:false,
            imgSrc:[
                'http://img3.redocn.com/tupian/20151015/ribennvpuzhuangdongmankatongrenwutu_5093392.jpg',
                'http://pic8.nipic.com/20100623/5208937_134307859911_2.jpg',
            ]
        }
    }
}
</script>
<style scoped>
dl dt {
    font-size: 16px;
    color: #333;
    margin-bottom: 10px;
    line-height: 24px;
    text-align: left;
}

dl dd {
    font-size: 14px;
    color: #666;
    line-height: 26px;
    text-align: left;
    margin-bottom: 10px;
}

.el-row {
    margin: 0!important;
}
img{
    height: 100%;
}

</style>
