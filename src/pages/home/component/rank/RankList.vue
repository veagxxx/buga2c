<template>
  <div class="rank-wrapper">
    <div class="rank-title">
      <span>积分排名</span>
      <el-link type="primary">更多>></el-link>
    </div>
    <div class="rank-list">
      <div class="rank-item" v-for="i in 10" :key="i">
        <div class="rank-index">
          <div class="index" :style="rankStyles[i - 1]">{{ i }}</div>
        </div>
        <div class="rank-name">佛耶格</div>
        <div class="rank">积分</div>
        <div class="rank-score" :style="{ color: rankStyles[i - 1]?.backgroundColor }">
          {{ (10 - i + 1) * 1000 - i * 10 }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
  const rankStyles = [
    { backgroundColor: '#f55935', color: '#fff' },
    { backgroundColor: '#7387f8', color: '#fff' },
    { backgroundColor: '#f39140', color: '#fff' },
  ]
</script>
<style lang='scss' scoped>
  .rank-wrapper {
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    .rank-title {
      @include flex-box;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      padding: 8px;
      color: #666;
      font-size: 14px;
      & > .el-link {
        font-size: 13px;
      }
    }
    .rank-list {
      box-sizing: border-box;
      overflow: auto;
      padding: 8px;
      .rank-item {
        @include flex-box;
        height: 42px;
        justify-content: space-around;
        &:hover {
          background-color: rgba($color: $colorPurple, $alpha: 0.3);
          border-radius: 8px;
        }
        & > div {
          flex: 1;
          margin: 8px 0px;
          font-size: 12px;
          text-align: center;
          color: #666;
        }
        .rank-index > div {
          width: 25px;
          height: 25px;
          text-align: center;
          line-height: 25px;
          border-radius: 50%;
          background-color: #ebeef5;
          margin: auto;
        }
      }
    }
  }
</style>