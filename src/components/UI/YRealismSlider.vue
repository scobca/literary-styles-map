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
          <img src="@/assets/img/authors/balzak.png" alt="" class="img">
          <h3>Оноре де Бальзак</h3>
          <div class="info_block">
            <p>
              Французский писатель: романист, драматург, литературный и художественный критик, эссеист, журналист и
              издатель; один из основоположников реализма в европейской литературе
            </p>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="slider_block">
          <img src="@/assets/img/authors/lermontov.png" alt="" class="img">
          <h3>М.Ю. Лермонтов</h3>
          <div class="info_block">
            <p>
              Русский поэт, прозаик, драматург, художник. Поручик лейб-гвардии Гусарского полка
            </p>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="slider_block">
          <img src="@/assets/img/authors/dickens.png" alt="" class="img">
          <h3>Чарльз Диккенс</h3>
          <div class="info_block">
            <p>
              Английский писатель, стенограф, репортёр, романист и эссеист. Классик мировой литературы, один из
              крупнейших прозаиков XIX века
            </p>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="slider_block">
          <img src="@/assets/img/authors/twen.png" alt="" class="img">
          <h3>Марк Твен</h3>
          <div class="info_block">
            <p>
              Американский писатель, юморист, журналист и общественный деятель
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
  name: 'realism-slider',
})
export default class YRealismSlider extends Vue {
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
