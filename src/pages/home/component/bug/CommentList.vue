<template>
  <div class="comment-list-wrapper">
    <div class="comment-item" v-for="(item, index) in comments" :key="item.id + index">
      <div class="flex mt-2 px-5">
        <img class="w-10 h-10 rounded-full" src="/src/assets/images/avatar.jpeg"/>
        <div class="flex-1 mb-1 flex justify-between items-center ml-1">
          <span class="bug-author text-sm f5 ml-1">
            {{ item.commentor.nickname }}
          </span>
          <span class="bug-time text-sm text-slate-400">
            {{ item.commentTime }}
          </span>
        </div>
      </div>
      <MdPreview previewOnly :modelValue="item.content"></MdPreview>
    </div>
  </div>
</template>
<script lang='ts' setup>
  import { Comment } from '@/interface';
  import { MdPreview } from 'md-editor-v3';
  const props = withDefaults(defineProps<{
    comments?: Comment[];
  }>(), {
    comments: [] as any,
  });

</script>
<style lang='scss' scoped>
  :deep(.md-editor-preview) {
    font-size: 14px;
    & pre {
      margin: 0;
    }
  }
</style>