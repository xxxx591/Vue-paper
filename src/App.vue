<template>
  <div id="app">
    <heard-tab></heard-tab>
    <div class="content content-top">
      <el-row :gutter="20" style="background: #f5f5f5;">
        <el-col :span="16" style="background:#fff;" class="grid-content bg-purple">
          <div class="grid-content bg-purple">
            <el-col :span="5">
              <tab-list></tab-list>
            </el-col>
            <el-col :span="19">
              <!-- <transition name="el-fade-in-linear" mode="out-in"> -->
                <router-view :meta="$route.meta"></router-view>
              <!-- </transition> -->
            </el-col>
          </div>
        </el-col>
        <el-col :span="8" class="grid-content bg-purple">
          <div class="grid-content bg-purple">
            <right-content v-show="isMune"></right-content>
          </div>
        </el-col>
      </el-row>
    </div>
    <foot-box></foot-box>
  </div>
</template>


<script>
import HeardTab from '@/components/heard'
import tabList from '@/components/tabList'
import footBox from '@/components/foot'
import rightContent from '@/components/right'
export default {
  name: 'app',
  data() {
    return {
      isMune: true,
    }
  },
  components: {
    HeardTab,
    tabList,
    footBox,
    rightContent
  },
  methods: {

  },
  watch: {
    $route(to, from) {
      console.log(to.query.selected)
      var contentBox = document.getElementsByClassName("el-col-16")[0]
      var tabListBox = document.getElementsByClassName("el-col-5")[0]
      var tableBox = document.getElementsByClassName("el-col-19")[0]
      console.log(contentBox)
      if (to.query.selected == 2) {
        this.isMune = false
        contentBox.style.width = 100 + '%';
        tabListBox.style.width = 13.33333 + '%';
        tableBox.style.width = 86.66666 + '%';
      } else {
        this.isMune = true
        contentBox.style.width = 66.66667 + '%';
        tabListBox.style.width = 20.83333 + '%';
        tableBox.style.width = 79.16667 + '%';
      }
    }
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

#heard-box {
  width: 100%;
  background: #324157;
}

.content {
  width: 1200px;
  margin: 0 auto;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #f5f5f5;
}

.content-top {
  margin-top: 25px;
}

.dialog-box .el-dialog--small {
  width: 30%!important;
}

.right-box {
  margin-top: 25px;
  box-sizing: border-box;
  padding: 20px;
  background: #fff;
}
</style>
