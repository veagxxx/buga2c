<template>
  <div class="navbar-wrapper">
    <div class="header-container">
      <div class="logo-container">
        <img src="/buga.svg"/>
        <span class="system-title">Buga</span>
      </div>
      <div class="menu-wrapper">
        <Menus/>
      </div>
      <div class="content">
        <div class="user-avatar flex-box">
          <el-dropdown>
            <span class="dropdown-link">
              <img src="../../assets/images/avatar.jpeg"/>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="UserFilled">个人中心</el-dropdown-item>
                <el-dropdown-item :icon="SwitchButton">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
  import { SwitchButton, UserFilled } from "@element-plus/icons-vue";
  import { useSettingStore } from '@/store/index';
  import { useRoute } from "vue-router";
  import { ref } from "vue";
  import SearchInput from "../component/SearchInput.vue";
  import Menus from "../component/Menus.vue";
  defineProps({
    hasCollapse: Boolean
  })
  const searchValue = ref<string>('')
</script>
<style lang='scss' scoped>
  .navbar-wrapper {
    height: 100%;
    padding: 0 16px;
    position: relative;
    .flex-box, .logo-container, .header-container, .content {
      @include flex-box;
    }
    .logo-container, .header-container, .content, .menu-wrapper {
      height: 100%;
    }
    .logo-container {
      user-select: none;
      .system-title {
        font-weight: bold;
        font-size: 18px;
        text-shadow: -1px 0px 1px $colorPurple;
        margin-left: 8px;
        color: $colorPurple;
      }
    }
    .header-container {
      justify-content: space-between;
      margin: 0 auto;
      height: 100%;
      :deep(.el-menu--horizontal) {
        border-bottom: none;
      }
      .content {
        height: 100%;
        justify-content: flex-end;
        .search-con {
          padding: 0 12px;
        }
        .user-avatar {
          cursor: pointer;
          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
        }
      }
    }
  }
</style>