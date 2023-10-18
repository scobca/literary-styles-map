<template>
  <v-card
    elevation="10"
    max-width="20rem"
    class="mx-auto"
  >
    <v-carousel
      class="carousel"
      :continuous="false"
      :show-arrows="false"
      hide-delimiter-background
      hide-delimiters
      height="37rem"
      cycle="true"
      interval="6500"
    >
      <v-carousel-item>
        <div class="slider_block">
          <img src="@/assets/img/authors/hlebnikov.png" alt="" class="img">
          <h3>Велимир Хлебников</h3>
          <div class="info_block">
            <p>
              Русский поэт и прозаик, один из крупнейших деятелей русского авангарда. Входил в число основоположников
              русского футуризма
            </p>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="slider_block">
          <img src="@/assets/img/authors/mavakovski.png" alt="" class="img">
          <h3>Владимир Владимирович Маяковский</h3>
          <div class="info_block">
            <p>
              русский и советский поэт, драматург, киносценарист, кинорежиссёр, киноактёр, художник.
            </p>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="slider_block">
          <img src="@/assets/img/authors/pasternak.png" alt="" class="img">
          <h3>Борис Леонидович Пастернак</h3>
          <div class="info_block">
            <p>
              Русский советский поэт, писатель и переводчик. Один из крупнейших русских поэтов XX века
            </p>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="slider_block">
          <img src="@/assets/img/authors/vvedenski.png" alt="" class="img">
          <h3>Александр Иванович Введенский</h3>
          <div class="info_block">
            <p>
              Русский поэт, драматург, детский писатель, член Объединения реального искусства. Подавляющее большинство
              «взрослых» текстов Введенского было опубликовано посмертно
            </p>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>


<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  name: 'futurism-slider',
})
export default class YFuturismSlider extends Vue {
  show = false
}
</script>

<style scoped lang="less">
@import "@/assets/styles/color";

* {
  background: transparent;
}

.slider_block {
  height: 46vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: .5rem;
}

.slider_block > h3 {
  font-size: 1.5rem;
  color: @text-color-dark;
}

.img {
  height: 18rem;
  margin-bottom: .5rem;
}

.info_block {
  background: @bg-text-color-dark;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  width: 15vw;
  height: 20rem;
  margin: 1rem auto;
  padding: .5rem;
  border-radius: .5rem;
}
</style>
