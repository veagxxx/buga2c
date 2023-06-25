<template>
  <div class="bugs-wrapper">
    <div class="bugs-view-container">
      <BugItem
        v-for="(item, index) in bugList"
        :key="item.id"
        :bugData="item"
      />
    </div>
  </div>
</template>
<script lang='ts' setup>
  import { onMounted, ref } from 'vue';
  import BugItem from './BugItem.vue';
  import { getBugList } from '@/api/bug.api';
  import { Bug } from '@/interface';

  onMounted(() => {
    queryBugs();
  });
  const bugList = ref<Bug[]>([]);
  const queryBugs = async () => {
    try {
      const res = await getBugList({ offset: 1, limit: 10 });
      bugList.value = res.data.list || [];
    } catch (error) {
      console.log(error);
    }
  }
</script>
<style lang='scss' scoped>
  .bugs-wrapper {
    position: relative;
    .bug-pagination {
      width: 50%;
      height: 34px;
      padding: 2px 0px;
      background-color: #fff;
      position: fixed;
      top: calc(100vh - 34px - 14px);
      left: 50%;
      transform: translateX(-50%);
      border-radius: 4px;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      @include flex-box;
      justify-content: center;
    }
  }
</style>