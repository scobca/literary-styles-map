<template>
  <div class="main_container row_container">
    <div class="contacts">
      <p>Фокин Владимир</p>
    </div>
    <div class="town">
      Санкт-Петербург
    </div>
    <div class="year">
      2023 год
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({})
export default class YFooter extends Vue {

}
</script>

<style scoped lang="less">
@import "@/assets/styles/color";

.main_container {
  min-height: 3rem;
  background-color: black;
  padding: .75rem 3rem;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  color: @text-color-dark;
}
</style>
