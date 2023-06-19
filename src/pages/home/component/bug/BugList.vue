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
  }]
</script>
<style lang='scss' scoped>

</style>