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
              <router-view></router-view>
            </el-col>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import HeardTab from '@/components/heard'
import tabList from '@/components/tabList'
export default {
  name: 'app',
  components: {
    HeardTab,
    tabList
  },
  methods: {
  
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #f5f5f5;
}

.content {
  width: 1200px;
  margin: 0 auto;
}
.content-top{
  margin-top: 25px;
}
</style>
