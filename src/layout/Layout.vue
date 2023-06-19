<template>
  <el-container class="container">
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
.container {
  display: flex;
  height: 100%;
  overflow: hidden;
  .el-header {
    padding: 0;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    background-color: $headerBgColor;
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