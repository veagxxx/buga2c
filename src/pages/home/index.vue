<template>
  <div class="home-page">
    <div class="page-wrapper">
      <div class="page-left">
        <BugList/>
      </div>
      <div class="page-right">
        <div class="contribute-wrapper">
          <!-- <Empty/> -->
          <Contribute/>
        </div>
        <RankList/>
      </div>
    </div>
    <el-backtop target=".el-main" :right="100" :bottom="100" />
  </div>
</template>
<script lang='ts' setup>
  import { onMounted, ref } from 'vue';
  import RankList from './component/rank/RankList.vue';
  import BugList from './component/bug/BugList.vue';
  import Contribute from './component/contribute/Contribute.vue';
  import { useTitle } from '@/hooks';
  useTitle();
</script>
<style lang='scss' scoped>
  .home-page {
    min-height: calc(100vh - $headerHeight - 32px);
    margin: 16px 60px;
    position: relative;
    @media screen and (max-width: 768px) {
      margin: 12px;
    }
    .page-wrapper {
      @include flex-box;
      gap: 12px;
      height: 100%;
      width: 100%;
      align-items: flex-start;
      .page-left {
        height: 100%;
        flex: 1 0 auto;
        box-sizing: border-box;
        @media screen and (max-width: 768px) {
          max-width: 100%;
        }
        @media screen and (min-width: 768px) {
          max-width: calc(100% - 280px);
        }
      }
      .page-right {
        @media screen and (max-width: 768px) {
          display: none;
        }
        @media screen and (min-width: 768px) {
          @include flex-box;
          flex: 1 0 auto;
          max-width: 280px;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .contribute-wrapper {
          height: 180px;
          width: 100%;
          background-color: #fff;
        }
      }
    }
  }
</style>