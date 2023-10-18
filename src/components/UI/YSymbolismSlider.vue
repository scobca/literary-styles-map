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
          <img src="@/assets/img/authors/gippius.png" alt="" class="img">
          <h3>Зинаида Николаевна Гиппиус</h3>
          <div class="info_block">
            <p>
              Русская поэтесса и писательница, драматург и литературный критик, одна из видных представительниц
              Серебряного века
            </p>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="slider_block">
          <img src="@/assets/img/authors/brusov.png" alt="" class="img">
          <h3>Валерий Яковлевич Брюсов</h3>
          <div class="info_block">
            <p>
              Русский поэт, прозаик, драматург, переводчик, литературовед, литературный критик и историк
            </p>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="slider_block">
          <img src="@/assets/img/authors/balmont.png" alt="" class="img">
          <h3>Константин Дмитриевич Бальмонт</h3>
          <div class="info_block">
            <p>
              Русский поэт-символист, переводчик и эссеист, один из виднейших представителей русской поэзии Серебряного
              века
            </p>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="slider_block">
          <img src="@/assets/img/authors/block.png" alt="" class="img">
          <h3>Александр Александрович Блок</h3>
          <div class="info_block">
            <p>
              Русский поэт Серебряного века, писатель, публицист, драматург, переводчик, литературный критик. Классик
              русской литературы XX столетия, один из крупнейших представителей русского символизма
            </p>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="slider_block">
          <img src="@/assets/img/authors/beliy.png" alt="" class="img">
          <h3>Андрей Белый</h3>
          <div class="info_block">
            <p>
              Русский писатель, поэт, математик, критик, мемуарист, стиховед; один из ведущих деятелей русского
              символизма и модернизма в целом
            </p>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="slider_block">
          <img src="@/assets/img/authors/annenski.png" alt="" class="img">
          <h3>Иннокентий Фёдорович Анненский</h3>
          <div class="info_block">
            <p>
              Русский поэт, драматург и переводчик, критик. Исследователь литературы и языка, директор мужской
              Царскосельской гимназии.
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
  name: 'symbolism-slider',
})
export default class YSymbolismSlider extends Vue {
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
