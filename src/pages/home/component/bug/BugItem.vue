<template>
  <el-card shadow="never">
    <div class="bug-info mb-2 flex">
      <img class="bug-info-avatar" src="/src/assets/images/avatar.jpeg"/>
      <div class="bug-info-publish mb-1 flex flex-col items-start ml-1">
        <span class="bug-author text-sm f5">
          {{ bugData.author.nickname }}
        </span>
        <span class="bug-time text-xs text-slate-500">
          {{ bugData.createTime }}
        </span>
      </div>
    </div>
    <div class="bug-info-title mb-2 font-semibold truncate">
      {{ bugData.title }}
    </div>
    <div class="mb-2 text-sm text-slate-500 cursor-pointer line-clamp-2 text-ellipsis">
      {{ bugData.description }}
    </div>
    <div class="bug-tags mb-2" v-if="bugData.tags">
      <el-tag v-for="(tag, tagIndex) in bugData.tags" :key="tag + tagIndex">
        {{ tag.tagName }}
      </el-tag>
    </div>
    <el-space class="action-wrapper w-full select-none" :size="10" :spacer="spacer">
      <div class="action-info pl-6 pr-6 text-center">
        <div class="like-action flex cursor-pointer" @click="onLike">
          <Transition name="zoom" mode="out-in">
            <svg-icon v-if="!like" icon-class="like"></svg-icon>
            <svg-icon v-else icon-class="like-fill"></svg-icon>
          </Transition>
          <span class="text-sm ml-1 leading-4">{{ 123 }}</span>
        </div>
      </div>
      <div class="action-info pl-6 pr-6 text-center">
        <div class="star-aciton flex items-center cursor-pointer">
          <Transition name="zoom" mode="out-in">
            <svg-icon v-if="!like" icon-class="star"></svg-icon>
            <svg-icon v-else icon-class="star-fill"></svg-icon>
          </Transition>
          <span class="text-sm ml-1 leading-4">{{ 46 }}</span>
        </div>
      </div>
      <div class="action-info pl-6 pr-6 text-center">
        <div class="comment-action flex cursor-pointer">
          <svg-icon icon-class="comment"></svg-icon>
          <span class="text-sm ml-1 leading-4">{{ 200 }}</span>
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
  const spacer = h('span', { style: { color: '#ccc' } }, '|');
  const like = ref<boolean>(false);
  const onLike = () => {
    like.value = !like.value;
  }
</script>
<style lang='scss' scoped>
  .el-card {
    border: none;
    border-radius: 0;
    &:not(:last-of-type) {
      margin-bottom: 12px;
    }
    .bug-info-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .el-tag:not(:last-of-type) {
      margin-right: 8px;
    }
  }
  .zoom-enter-active, .zoom-leave-active {
    transition: all .15s cubic-bezier(0.42, 0, 0.34, 1.55);
  }
  .zoom-enter, .zoom-leave-to {
    transform: scale(0);
  }
  .zoom-enter-to, .zoom-leave {
    transform: scale(1);
  }
</style>