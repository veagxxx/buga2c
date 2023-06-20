<template>
  <div class="monthly-contributes">
    <div class="switch-tool">
      <button class="switch-last-month-bth" @click="onMonthChange(-1)">
        <svg-icon icon-class="left"></svg-icon>
      </button>
      <button class="current-month">
        <span> {{ year }} / </span>
        <span @click="onMonthChange(0)">本月</span>
        <span> / {{ months[month] }}</span>
      </button>
      <button class="switch-next-month-bth" @click="onMonthChange(1)">
        <svg-icon icon-class="right"></svg-icon>
      </button>
    </div>
    <table class="contribute-grid-table">
      <thead>
        <tr>
          <td></td>
          <td v-for="(th, index) in 7" :key="th + 'th' + index" class="contribute-label-x">
            <span class="text-xs">{{ th }}</span>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tr in 5" :key="`tr-${tr}`">
          <td class="contribute-label-y">
            <span>{{ weekText[tr - 1] }}</span>
          </td>
          <td 
            v-for="td in 7" 
            :key="`td-${td}`" 
            class="contribute-day" 
            :class="{ 
              'out-of-month-day': outOfMonth(tr, td),
              'lever-1': getLevel(tr, td) > 0 && getLevel(tr, td) < 2,
              'lever-2': getLevel(tr, td) >= 2 && getLevel(tr, td) < 4,
              'lever-3': getLevel(tr, td) >= 4,
            }"
          >
            <el-tooltip
              effect="dark"
              placement="top"
              :content="getContent(tr, td)"
              :hide-after="0"
              v-if="!outOfMonth(tr, td)"
            >
              <span class="tooltip-only"></span>
            </el-tooltip>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang='ts' setup>
  import { onMounted, ref } from 'vue';
  import moment from 'moment';
  import { contributeList } from './contribute';
  import { useTitle } from '@/hooks';
  useTitle();
  const months: string[] = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ]
  const weekText: string[] = ['1st', '2nd', '3rd', '4th', '5th'];
  const startOfDay = ref<number>(moment().startOf('month').day());
  const daysInMonth = ref<number>(moment().daysInMonth());
  const month = ref<number>(moment().month());
  const year = ref<number>(moment().year());
  const monthStep = ref<number>(0);
  onMounted(async () => {
    await initData();
  });
  const outOfMonth = (row: number, col: number) => {
    const index: number = (row - 1) * 7 + col;
    return index < startOfDay.value || index - startOfDay.value + 1 >  daysInMonth.value;
  }
  const onMonthChange = (step: number) => {
    monthStep.value = step ? monthStep.value + step : 0;
    startOfDay.value = moment().add(monthStep.value, 'months').startOf('month').day();
    daysInMonth.value = moment().add(monthStep.value, 'months').daysInMonth();
    month.value = moment().add(monthStep.value, 'months').month();
    year.value = moment().add(monthStep.value, 'months').year();
  }
  const initData = async () => {
    for (let i = 0; i < daysInMonth.value; i++) {
      const day = i + 1 < 10 ? `0${i + 1}` : i + 1;
      const date: string = moment().add(monthStep.value, 'months').format(`YYYY-MM-${day}`);
      if (!contributeList.find(item => item.date == date)) {
        contributeList.splice(i, 0, { id: 0, date, contribute: 0 });
      }
    }
  }
  const getContent = (row: number, col: number) => {
    const index: number = (row - 1) * 7 + col - startOfDay.value;
    if (outOfMonth(row, col) || !contributeList[index]) {
      return '';
    } else {
      return `${contributeList[index].date} 有 ${contributeList[index].contribute} 个贡献`;
    }
  }
  const getLevel = (row: number, col: number) => {
    const index: number = (row - 1) * 7 + col - startOfDay.value;
    if (!contributeList[index] || outOfMonth(row, col)) {
      return 0;
    } else {
      return contributeList[index].contribute;
    }
  }
</script>
<style lang='scss' scoped>
  .monthly-contributes {
    @include flex-box;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
    .switch-tool {
      @include flex-box;
      justify-content: space-around;
      width: 100%;
      margin-bottom: 4px;
      .switch-last-month-bth, .switch-next-month-bth {
        @include flex-box;
        justify-content: center;
        /* width: 20px;
        height: 20px; */
        padding: 4px;
        border-radius: 50%;
        border: 1px solid #ccc;
        transition: all 0.3s;
        cursor: pointer;
        color: #777;
        background-color: #fff;
        &:hover {
          border-color: $colorPurple;
          color: $colorPurple;
        }
      }
      .current-month {
        cursor: pointer;
        transition: all 0.3s;
        color: #777;
        font-size: 14px;
        border: none;
        border-radius: 4px;
        &:hover {
          color: $colorPurple;
        }
      }
    }
    .contribute-grid-table {
      border-spacing: 4px;
      overflow: hidden;
      position: relative;
      border-collapse: separate;
      width: max-content;
      .contribute-label-y, .contribute-label-x {
        font-size: 12px;
        color: #333;
        font-weight: 400;
        padding: 0px 2px 0px 1px;
        text-align: left;
        line-height: 0px;
      }
      .contribute-label-x {
        padding: 0;
        text-align: center;
      }
      .contribute-day {
        padding: 0;
        width: 13px;
        height: 13px;
        border-radius: 2px;
        background-color: #ebedf0;
        outline: 1px solid rgba($color: $colorPurple, $alpha: 0.2);
        outline-offset: -1px;
        position: relative;
        .tooltip-only {
          display: block;
          width: 100%;
          height: 100%;
          padding: 0;
          overflow: hidden;
          word-wrap: normal;
          border: 0;
        }
        &.out-of-month-day {
          background-color: #fff;
        }
        &.lever-1 {
          background-color: #8c91e8;
        }
        &.lever-2 {
          background-color: #626aef;
        }
        &.lever-3 {
          background-color: #4149d4;
        }
      }
    }
  }
  
</style>