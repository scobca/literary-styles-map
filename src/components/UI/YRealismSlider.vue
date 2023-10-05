<template>
  <v-card
    elevation="24"
    max-width="444"
    class="mx-auto"
  >
    <v-carousel
      class="carousel"
      :continuous="false"
      :show-arrows="false"
      hide-delimiter-background
      hide-delimiters
      height="36vh"
      cycle="true"
      interval="4000"
    >
      <v-carousel-item>
        <div class="slider_block">
          <img src="@/assets/img/balzak.jpg" alt="" class="img">
          <h3>Оноре де Бальзак</h3>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="slider_block">
          <img src="@/assets/img/lermontov.jpg" alt="" class="img">
          <h3>М.Ю. Лермонтов</h3>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>


<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  name: 'realism-slider',
})
export default class YRealismSlider extends Vue {

}
</script>

<style scoped lang="less">
.slider_block {
  height: 36vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: .5rem;
}

.img {
  height: 30vh;
}
</style>
