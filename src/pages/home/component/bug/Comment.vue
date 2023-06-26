<template>
  <div class="comment-wrapper" v-if="visible">
    <MdEditor 
      ref="commentEd" 
      v-model="state.content" 
      :preview="false" 
      :footers="footers" 
      :toolbars="toolbars"
      style="height: 300px;"
    >
      <template #defToolbars>
        <DropdownToolbar title="表情" :visible="state.visible" @onChange="onVisible">
          <template #overlay>
            <Emoji :onInsert="onEmoji"/>
          </template>
          <template #trigger>
            <svg-icon icon-class="emoji"></svg-icon>
          </template>
        </DropdownToolbar>
      </template>
      <template #defFooters>
        <el-button class="comment-btn" size="small" type="primary">评论</el-button>
      </template>
    </MdEditor>
  </div>
</template>
<script lang='ts' setup>
  import { DropdownToolbar } from 'md-editor-v3';
  import type { InsertContentGenerator } from 'md-editor-v3';
  import { onMounted, reactive, ref, watch } from 'vue';
  import Emoji from '@/components/emoji/Emoji.vue';
  import { Comment } from '@/interface';
  const props = defineProps({
    visible: {
      type: Boolean,
      default: () => false
    },
  })
  const state = reactive({
    content: '',
    visible: false,
  });
  const commentEd = ref();
  const toolbars = ['bold', 'underline', 'italic', 'sub', 'sup', 'codeRow', 'code', 'link', 'preview', 0];
  const footers = ['markdownTotal', '=', 0];
  const onVisible = () => {
    state.visible = !state.visible;
  }
  const onEmoji = (emoji: InsertContentGenerator) => {
    commentEd.value?.insert(emoji);
  }
  watch(() => props.visible, () => {
    console.log('watch', props.visible);
  })
</script>
<style lang='scss' scoped>
  :deep(.md-editor-toolbar-wrapper .md-editor-toolbar-item) {
    display: flex;
    align-items: center;
  }
  .comment-btn {
    width: 36px;
    height: 20px;
    margin-right: 8px;
  }
</style>