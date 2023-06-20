<template>
  <div class="bugs-wrapper">
    <div class="bugs-view-container">
      <BugItem
        v-for="(item, index) in bugList"
        :key="item.id"
        :bugData="item"
      />
    </div>
    <div class="bug-pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :small="false"
        :background="false"
        layout="prev, pager, next, jumper"
        :total="1000"
        />
        <!-- @size-change="handleSizeChange"
        @current-change="handleCurrentChange" -->
    </div>
  </div>
</template>
<script lang='ts' setup>
  import { ref } from 'vue';
  import BugItem from './BugItem.vue';
  const bugList = [{
    id: 1,
    title: 'Vue 报错Vue 报错Vue 报错Vue 报错Vue 报错Vue 报错Vue 报错Vue 报错Vue 报错Vue 报错Vue 报错Vue 报错Vue 报错Vue 报错Vue 报错Vue 报错Vue 报错Vue 报错Vue 报错Vue 报错',
    description: "Module not found: Error: Can't resolve '../views/admin/AdminVeiw.vue'",
    status: 1,
    createTime: '2020-09-01 14:00',
    author: '佛耶格',
    tags: ['Vue', '前端']
  },{
    id: 2,
    title: 'Vue 报错',
    description: "Module not found: Error: Can't resolve '../views/admin/AdminVeiw.vue'",
    status: 3,
    createTime: '2020-09-01 14:00',
    author: '佛耶格'
  },{
    id: 3,
    title: 'Vue 报错',
    description: "Module not found: Error: Can't resolve '../views/admin/AdminVeiw.vue'",
    status: 1,
    createTime: '2020-09-01 14:00',
    author: '佛耶格'
  },{
    id: 4,
    title: 'Vue 报错',
    description: "Module not found: Error: Can't resolve '../views/admin/AdminVeiw.vue'",
    status: 1,
    createTime: '2020-09-01 14:00',
    author: '佛耶格'
  },{
    id: 5,
    title: 'Vue 报错',
    description: "Module not found: Error: Can't resolve '../views/admin/AdminVeiw.vue'",
    status: 1,
    createTime: '2020-09-01 14:00',
    author: '佛耶格'
  },{
    id: 6,
    title: 'Vue 报错',
    description: "Module not found: Error: Can't resolve '../views/admin/AdminVeiw.vue'",
    status: 1,
    createTime: '2020-09-01 14:00',
    author: '佛耶格'
  },{
    id: 7,
    title: 'Vue 报错',
    description: "Module not found: Error: Can't resolve '../views/admin/AdminVeiw.vue'",
    status: 1,
    createTime: '2020-09-01 14:00',
    author: '佛耶格'
  },{
    id: 8,
    title: 'Vue 报错',
    description: "Module not found: Error: Can't resolve '../views/admin/AdminVeiw.vue'",
    status: 1,
    createTime: '2020-09-01 14:00',
    author: '佛耶格'
  }];
  const currentPage = ref(1);
  const pageSize = ref(10);
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