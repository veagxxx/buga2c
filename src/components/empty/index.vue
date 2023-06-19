<template>
  <div class="empty-wrapper">
    <img src="../../assets/icons/empty-chart.svg"/>
    <span class="empty-text">暂无数据</span>
  </div>
</template>
<script lang='ts' setup>
  
</script>
<style lang='scss' scoped>
  .empty-wrapper {
    width: 100%;
    height: 100%;
    @include flex-box;
    justify-content: center;
    flex-direction: column;
    img {
      width: 60px;
      height: 60px;
    }
    .empty-text {
      font-size: 16px;
      color: #aaa;
    }
  }
</style>