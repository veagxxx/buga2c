<template>
  <div class="menu-container">
    <button @click="onDrawer" class="menu-hamburger" :class="{ 'active': isActive }">
      <span class="hamburger-1"></span>
      <span class="hamburger-2"></span>
      <span class="hamburger-3"></span>
    </button>
    <MenuList class="menu-wrapper" mode="horizontal"/>
    <el-drawer
      v-model="isActive"
      direction="ltr"
    >
      <MenuList class="menu-wrapper--vertical" />
    </el-drawer>
  </div>
</template>
<script lang='ts' setup>
  import MenuList from './MenuList.vue';
  import { ref } from 'vue';
  const isActive = ref(false);
  const onDrawer = () => {
    isActive.value = !isActive.value;
  }
</script>
<style lang='scss' scoped>
  .menu-container {
    height: 100%;
    overflow: hidden;
    @include flex-box;
    .menu-hamburger {
      background: none;
      border: none;
      padding: 0;
      margin: 0 12px;
      cursor: pointer;
      line-height: 1;
      width: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: $headerHeight;
      & > span {
        background-color: #000;
        border-radius: 10px;
        height: 2px;
        margin: 2px 0;
        transition: all 0.3s;
        width: 100%;
        &.hamburger-1 {
          width: 50%;
        }
        &.hamburger-3 {
          width: 75%;
        }
      }
      &.active {
        & > .hamburger-1 {
          transform: rotate(45deg) translate(13px, 1px);
        }
        & > .hamburger-2 {
          transform: rotate(-45deg);
        }
        & > .hamburger-3 {
          transform: translate(0px, -8px) rotate(45deg);
        }
      }
      @media screen and (max-width: 768px) {
        display: flex;
      }
      @media screen and (min-width: 768px) {
        display: none;
      }
    }
    .menu-wrapper {
      @media screen and (min-width: 768px) {
        @include flex-box;
      }
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    .el-menu {
      height: 100%;
      .el-menu-item {
        margin: 0;
      }
    }
    :deep(.el-drawer) {
      .el-drawer__body {

        padding: 0;
      }
    }
    
    .menu-wrapper--vertical {
      height: auto;
    }
  }
</style>