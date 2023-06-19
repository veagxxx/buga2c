<template>
  <el-menu
    :default-active="activePath"
    :mode="mode"
    :ellipsis="false"
    router
  >
    <el-menu-item 
      v-for="(item, index) in menuList" 
      :key="index" 
      :index="item.path"
    >
      {{ item.meta.title }}
    </el-menu-item>
  </el-menu>
</template>
<script lang='ts' setup>
  import { menuList } from '@/config';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  defineProps({
    mode: {
      type: String,
      default: 'vertical',
    }
  });
  const route = useRoute();
  const activePath = computed(() => route.path);
</script>
<style lang='scss' scoped>
  
</style>