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
        <el-button 
          class="comment-btn" 
          size="small" 
          type="primary"
          @click="onComment"
        >评论</el-button>
      </template>
    </MdEditor>
    <el-divider>
      <span>共 {{ state.comments.length }} 条评论</span>
    </el-divider>
    <CommentList v-loading="state.loading" :comments="state.comments"/>
  </div>
</template>
<script lang='ts' setup>
  import { DropdownToolbar } from 'md-editor-v3';
  import type { InsertContentGenerator } from 'md-editor-v3';
  import { reactive, ref, watch } from 'vue';
  import Emoji from '@/components/emoji/Emoji.vue';
  import { Bug, Comment } from '@/interface';
  import CommentList from './CommentList.vue';
  import { getCommentList } from '@/api/comment.api';
  interface Props {
    visible?: boolean;
    compose?: Bug | null;
  }
  const props = withDefaults(defineProps<Props>(), {
    visible: false,
    compose: null
  })
  interface State {
    loading: boolean;
    content: string;
    visible: boolean;
    comments: Comment[];
  }
  const state = reactive<State>({
    loading: false,
    content: '',
    visible: false,
    comments: [],
  });
  const commentEd = ref();
  const toolbars = ['codeRow', 'code', 'link', 'preview', 0];
  const footers = ['markdownTotal', '=', 0];
  const onVisible = () => {
    state.visible = !state.visible;
  }
  const onEmoji = (emoji: InsertContentGenerator) => {
    commentEd.value?.insert(emoji);
  }
  const onComment = () => {
    console.log(state.content);
  }
  const onQueryComment = async () => {
    try {
      if (props.compose?.id) {
        state.loading = true;
        const res = await getCommentList(props.compose.id, { offset: 1, limit: 10 });
        state.comments = res.data.list;
        state.loading = false;
      } 
    } catch (error) {
      console.log(error);
    }
  }
  watch(() => props.visible, (nVal: boolean) => {
    if (nVal) {
      onQueryComment();
    }
  })
</script>
<style lang='scss' scoped>
  :deep(.md-editor-toolbar-wrapper .md-editor-toolbar-item) {
    display: flex;
    align-items: center;
  }
  :deep(.md-editor-footer) {
    height: 30px;
    .md-editor-footer-right {
      @include flex-box;
    }
  }
  .comment-btn {
    width: 36px;
    height: 20px;
    margin-right: 8px;
  }
</style>