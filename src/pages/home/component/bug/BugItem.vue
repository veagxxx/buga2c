<template>
  <el-card shadow="never">
    <div class="user-info">
      <img src="/src/assets/images/avatar.jpeg"/>
      <div class="info">
        <span class="bug-author">{{ bugData.author }}</span>
        <span class="bug-time">{{ bugData.createTime }}</span>
      </div>
    </div>
    <div class="bug-title">
      {{ bugData.title }}
    </div>
    <div class="bug-description">
      {{ bugData.description }}
    </div>
    <div class="bug-tags" v-if="bugData.tags">
      <el-tag v-for="(tag, tagIndex) in bugData.tags" :key="tag + tagIndex">
        {{ tag }}
      </el-tag>
    </div>
    <el-space class="action-info" :size="10" :spacer="spacer">
      <div class="action">
        <div class="like-action">
          <svg-icon icon-class="like"></svg-icon>
          <span>{{ 123 }}</span>
        </div>
      </div>
      <div class="action">
        <div class="star-aciton">
          <svg-icon icon-class="star"></svg-icon>
          <span>{{ 46 }}</span>
        </div>
      </div>
      <div class="action">
        <div class="comment-action">
          <svg-icon icon-class="comment"></svg-icon>
          <span>{{ 200 }}</span>
        </div>
      </div>
    </el-space>
  </el-card>
</template>
<script lang='ts' setup>
  import { h, ref } from 'vue'
  interface Props {
    bugData: any;
  }
  withDefaults(defineProps<Props>(), {});
  const spacer = h('span', { style: { color: '#ccc' } }, '|')
</script>
<style lang='scss' scoped>
  .el-card {
    border: none;
    border-radius: 0;
    &:not(:last-of-type) {
      margin-bottom: 12px;
    }
    .user-info {
      @include flex-box;
      margin-bottom: 12px;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      .info {
        @include flex-box;
        margin-left: 12px;
        align-items: flex-start;
        flex-direction: column;
        .bug-author {
          font-weight: 500;
          font-size: 14px;
        }
        .bug-time {
          color: #888;
          font-size: 13px;
        }
      }
    }
    .bug-title {
      font-weight: 600;
      margin-bottom: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .bug-description {
      font-size: 14px;
      color: #666;
      margin-bottom: 12px;
      cursor: pointer;
    }
    .bug-tags {
      margin-bottom: 12px;
      .el-tag:not(:last-of-type) {
        margin-right: 8px;
      }
    }
    .action-info {
      width: 100%;
      user-select: none;
      .action {
        padding: 0 24px;
        width: 60px;
        text-align: center;
        & > div {
          @include flex-box;
          justify-content: center;
          cursor: pointer;
        }
        & span {
          font-size: 13px;
          line-height: 16px;
          margin-left: 2px;
        }
      }
    }
  }
</style>