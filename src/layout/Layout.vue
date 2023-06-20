<template>
  <el-container class="buga-container">
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path"/>
        </transition>
      </router-view>
    </el-main> 
  </el-container>
  
</template>
<script lang='ts' setup>
  import Header from './header/index.vue';

</script>
<style lang='scss' scoped>
.buga-container {
  display: flex;
  height: 100%;
  overflow: hidden;
  .el-header {
    padding: 0;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    background-color: $headerBgColor;
    border-bottom: 1px solid #0f172a1a;
  }
  .el-main {
    padding: 0px;
    overflow: auto;
    overflow-x: hidden;
    background: $mainBgColor;
    height: 100%;
    position: relative;
  }
}
</style>