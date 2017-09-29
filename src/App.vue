<template>
  <div id="app">
    <heard-tab></heard-tab>
    <div class="content content-top">
      <el-row :gutter="20">
        <el-col :span="16" style="background:#fff;">
          <div class="grid-content bg-purple">
            <el-col :span="5">
              <tab-list></tab-list>
            </el-col>
            <el-col :span="19">
              <transition name="el-fade-in-linear" mode="out-in">
                <router-view></router-view>
              </transition>
            </el-col>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
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
export default {
  name: 'app',
  components: {
    HeardTab,
    tabList,
    footBox,
  },
  methods: {

  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

html {
  overflow: hidden;
}

body {
  overflow: auto;
  width: calc(100vw + 20px);
}
li{
  list-style: none;
}

#heard-box {
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
.dialog-box .el-dialog--small{
    width: 30%!important;
}
</style>
