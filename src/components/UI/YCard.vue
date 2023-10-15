<template>
  <div class="wrap">
    <div class="card">
      <div class="front"><slot name="front-side">front side</slot></div>
      <div class="back"><slot name="back-side">back side</slot></div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  name: 'y-card'
})
export default class YCard extends Vue {

}

</script>

<style scoped lang="less">
@import '@/assets/styles/color';

.wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #BBDEFB;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 300px;
  height: 300px;
  position: relative;
  perspective: 1000px;
}

.front, .back {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;
  backface-visibility: hidden;
  border-radius: 10px;

  background-color: @bg-text-color;
  color: @text-color;
}

.back {
  transform: rotateY(180deg);
}

.card:hover .front {
  transform: rotateY(180deg);
}

.card:hover .back {
  transform: rotateY(360deg);
}
</style>
