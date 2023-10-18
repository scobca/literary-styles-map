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
          <img src="@/assets/img/authors/ahmatova.png" alt="" class="img">
          <h3>Анна Андреевна Ахматова</h3>
          <div class="info_block">
            <p>
              Русская поэтесса Серебряного века, одна из наиболее значимых фигур русской литературы XX века
            </p>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="slider_block">
          <img src="@/assets/img/authors/mandelshtam.png" alt="" class="img">
          <h3>Осип Эмильевич Мандельштам</h3>
          <div class="info_block">
            <p>
              Русский поэт, прозаик и переводчик, эссеист, критик, литературовед. Один из крупнейших русских поэтов XX
              века. Жертва сталинских репрессий
            </p>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="slider_block">
          <img src="@/assets/img/authors/narbut.png" alt="" class="img">
          <h3>Владимир Иванович Нарбут</h3>
          <div class="info_block">
            <p>
              Русский писатель, поэт и литературный критик, редактор, акмеист. Расстрелян в день своего 50-летия по
              постановлению тройки НКВД
            </p>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="slider_block">
          <img src="@/assets/img/authors/gumilev.png" alt="" class="img">
          <h3>Николай Степанович Гумилёв</h3>
          <div class="info_block">
            <p>
              Русский поэт Серебряного века, создатель школы акмеизма, прозаик, драматург, переводчик и литературный
              критик, путешественник, африканист, первый муж Анны Ахматовой
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
  name: 'acmeism-slider',
})
export default class YAcmeismSlider extends Vue {

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
