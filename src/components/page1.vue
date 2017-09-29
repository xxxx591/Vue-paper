<template>
    <div>
        <div style="text-align:left;">
            <el-checkbox v-model="checked" class="self-built">自建库
                <span class="self-built-span">（选中后对比范围包括自建库）</span>
            </el-checkbox>
        </div>
        <div class="paper-p">论文标题
            <el-input v-model="title" placeholder="请输入内容..." @change="change"></el-input>
            <span v-if='show'>{{msg}}</span>
        </div>
        <div class="paper-p">论文作者
            <el-input v-model="author" placeholder="请输入内容..."></el-input>
        </div>
        <div>
            <p class="paper-title">论文长度(内容的长度不超过30万字,系统按照Word字数统计里面的字符数(不计空格)计算)</p>
            <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="paperValue" @change="paperChange">
            </el-input>
            <p class="paper-prompt">您当前已经输入
                <span>{{enteredWordNum}}</span> 字， 需要消耗余额
                <span>{{consumptionNum}}</span> 积分， 需要额外支付
                <span>{{extraWordNum}}</span> 字，约
                <span>{{payMoney}}</span> 元</p>
        </div>
        <div class="btn-submit">
            <div>
                <el-button type="info" size="large" @click="success">提交检测</el-button>
                <el-button type="danger" size="large">领取免费字数</el-button>
            </div>
            <p><el-tag type="danger" class="hint">温馨提示</el-tag></p>
            <p class="hint-title">系统支持所有语种的论文检测，如中（简/繁）、英、日、法、德文等！</p>
            <p class="hint-title">系统在检测时会分析论文的前后文关系，所以请您提交论文的全部内容，如果是非全文的检测将不能保证检测的准确性。 </p>
            <p class="hint-title">被系统自动识别出来的非正文部分（如目录，标题，公式，图表，参考文献等）不参与检测，检测字数一般略小于论文字数。</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'lianxi',
    data() {
        return {
            msg: '标题不能为空',
            checked: false,
            title: '',         //标题
            author: '',        //作者
            show: true,
            paperValue: '',    //论文内容
            enteredWordNum: 0,  //总字数
            consumptionNum: 0,  //用户余额字数
            extraWordNum: 0,    //需要充值字数 
            payMoney: 0,        //充值金额
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
        paperChange() {
            var len = 0;
            for (var i = 0; i < this.paperValue.length; i++) { //遍历input框内内容
                var values = this.paperValue.charAt(i);
                if (values.match(/[^\x00-\xff]\s/ig) != null)   //匹配 一个汉字2个长度 一个字符1个长度
                {
                    len += 2;
                }
                else {
                    len += 1;
                }
            }
            var paperLens = Math.ceil(len / 2)
            this.enteredWordNum = paperLens;  // 向上取整长度之后的输入的字数
            this.consumptionNum = paperLens;  // 用户余额字数
            this.extraWordNum = paperLens - this.consumptionNum;  // 还需要充值的字数
            this.payMoney = Math.ceil(this.extraWordNum / 1000);  // 支付金额
        },
        success() {
            this.$notify({
                title: '成功',
                message: '提交论文成功',
                type: 'success'
            });
        },
    }
}
</script>
<style scoped>
.self-built {
    margin-top: 20px;
    font-weight: 600;
}

p,
div {
    text-align: left;
    font-size: 14px;
}

.self-built-span {
    color: #FF0000;
}

.el-input {
    width: 65%;
    margin: 15px 0 15px 12px;
}


.paper-p span {
    margin-left: 5px;
    color: #FF0000;
}

.paper-title {
    margin-bottom: 10px;
}

.paper-prompt {
    margin-top: 10px;
    font-weight: 600;
}

.paper-prompt span {
    color: #FF0000;
}

.btn-submit button {
    border-radius: 10px;
    margin: 20px 40px;
}
.hint{
    border-radius:10px;
    background: #FF4949;
    color:#fff;
}
.hint-title{
    font-size:12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 25px;
}
.hint-title:last-of-type{
    margin-bottom: 50px;
}
</style>
