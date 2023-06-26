<template>
  <div class="emoji-container p-3">
    <ol class="emojis grid grid-cols-10 gap-3">
      <li
        class="cursor-pointer hover:bg-violet-300"
        v-for="(emoji, index) of emojis"
        :key="`emoji-${index}`"
        @click="onEmoji(emoji)"
        v-text="emoji"
      ></li>
    </ol>
  </div>
</template>
<script lang='ts' setup>
  import { PropType } from 'vue';
  import { emojis } from './emoji';
  import type { InsertContentGenerator } from 'md-editor-v3';
  const props = defineProps({
    onInsert: {
      type: Function as PropType<(generator: InsertContentGenerator) => void>,
      default: () => () => null
    }
  });
  const onEmoji = (emoji: string) => {
    const generator: InsertContentGenerator = () => {
      return {
        targetValue: emoji,
        select: true,
        deviationStart: 0,
        deviationEnd: 1
      };
    };
    props.onInsert(generator);
  }
</script>
<style lang='scss' scoped>
  .emoji-container {
    border-radius: 3px;
    border: 1px solid #e6e6e6;
    max-height: 300px;
  }
</style>