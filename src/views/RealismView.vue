<template>
  <v-parallax :src="require('@/assets/img/bg_1.jpg')" class="parallax">
    <y-header class="header"/>
    <div class="main_container">
      <div class="text_block">
        <div class="block" data-aos="fade-up" data-aos-duration="750">
          <h1>Реализм —</h1>
          <p>направление, а также художественный метод в литературе, ставящий целью правдивое воспроизведение
            действительности в её типичных чертах.
          </p>
        </div>
        <div class="block" data-aos="fade-up" data-aos-duration="750" data-aos-delay="750">
          <h2>Общие черты реализма в литературе:</h2>
          <ul class="ul_block">
            <li> изображение жизни в образах, соответствующих действительности, исторически конкретных событий,
              общества,
              эпохи;
            </li>
            <li> реальность – средство познания себя и мира вокруг;</li>
            <li> важность деталей интерьера, портрета, пейзажа;</li>
            <li> конкретика и типизация образов;</li>
          </ul>
        </div>
      </div>
      <div class="global_names_block" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1500">
        <div class="slider_container">
          <h2 class="header_color_light">Писатели реалисты</h2>
          <y-realism-slider/>
        </div>
      </div>
    </div>
    <div class="main_composition">
      <h2 data-aos="fade-up" data-aos-duration="750">Произведения реализма</h2>
      <div class="card_container">
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500">
          <template v-slot:front-side class="card card_template">
            <div class="name">
              <h2>Оноре де Бальзак —</h2>
            </div>
            <div class="composition">
              <h3>"Человеческая комедия"</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              Цикл сочинений французского писателя Оноре де Бальзака, составленный им самим из его 137 произведений
              и включающий романы с реальными, фантастическими и философскими сюжетами, изображающими французское
              общество в период Реставрации Бурбонов и Июльской монархии
            </p>
          </template>
        </y-card>
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="750">
          <template v-slot:front-side>
            <div class="name">
              <h2>А.С. Пушкин —</h2>
            </div>
            <div class="composition">
              <h3>"Капитанская дочка"</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              Исторический роман Александра Пушкина, действие которого происходит во время восстания Емельяна Пугачёва.
            </p>
          </template>
        </y-card>
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1000">
          <template v-slot:front-side>
            <div class="name">
              <h2>Ф.М. Достоевский —</h2>
            </div>
            <div class="composition">
              <h3>"Белые ночи"</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              Рассказ о романтической любви молодого мечтателя, одинокого и робкого человека, который однажды в
              белую ночь встретил и полюбил прекрасную девушку, почувствовав в ней родную душу
            </p>
          </template>
        </y-card>
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500">
          <template v-slot:front-side>
            <div class="name">
              <h2>Марк Твен —</h2>
            </div>
            <div class="composition">
              <h3>"Приключения Тома Сойера"</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              Повесть Марка Твена о приключениях мальчика, живущего в небольшом американском городке Сент-Питерсберг в
              штате Миссури.
            </p>
          </template>
        </y-card>
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="750">
          <template v-slot:front-side>
            <div class="name">
              <h2>Л.Н. Толстой —</h2>
            </div>
            <div class="composition">
              <h3>"Анна Каренина"</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              Роман Льва Толстого о трагической любви замужней дамы Анны Карениной и блестящего офицера Алексея
              Вронского на фоне счастливой семейной жизни дворян Константина Лёвина и Кити Щербацкой.
            </p>
          </template>
        </y-card>
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1000">
          <template v-slot:front-side>
            <div class="name">
              <h2>М.Ю. Лермонтов —</h2>
            </div>
            <div class="composition">
              <h3>"Герой нашего времени"</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              Первый в русской прозе социально-психологический роман, написанный Михаилом Юрьевичем Лермонтовым в
              1837—1839 годах, в котором описываются события из жизни на Кавказе молодого офицера с пылким нравом
              Григория Александровича Печорина.
            </p>
          </template>
        </y-card>
      </div>
    </div>
  </v-parallax>
</template>

<script lang="ts">
//@ts-ignore
import AOS from 'aos';
import {Options, Vue} from "vue-class-component";
import YRealismSlider from "@/components/UI/YRealismSlider.vue";
import YHeader from "@/components/UI/YHeader.vue";
import YCard from "@/components/UI/YCard.vue";

AOS.init()

@Options({
  name: 'realism-view',
  components: {YCard, YHeader, YRealismSlider},
})
export default class RealismView extends Vue {

}
</script>

<style scoped lang="less">
@import '@/assets/styles/color';

.card_container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  gap: 1rem;
  margin-top: 2rem;
  max-width: 80%;
}

.main_composition {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  margin: 5rem auto;
}

.main_composition > h2 {
  background: @bg-text-color-dark;
  height: 3rem;
  width: 30rem;
  padding: 0.3rem .5rem;
  border-radius: .75rem;
}

.header {
  margin: auto;
  background-color: @bg-text-color-dark;
  color: @text-color-dark !important;
}

.parallax {
  width: 100vw;
  min-height: 200vh;
}

.main_container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 1rem 20rem;
  min-height: 86vh;
}

.text_block {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 75vh;
  gap: 1rem;

  font-size: 1.1rem;
}

.block {
  display: flex;
  flex-direction: column;

  max-width: 30vw;
  text-align: left;

  background: @bg-text-color-dark;

  padding: 1.5rem 2.5rem;
  border-radius: .5rem;
}

</style>
