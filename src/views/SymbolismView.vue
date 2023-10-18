<template>
  <v-parallax :src="require('@/assets/img/bg_1.jpg')" class="parallax">
    <y-header class="header"/>
    <div class="main_container">
      <div class="text_block">
        <div class="block" data-aos="fade-up" data-aos-duration="750">
          <h1>Символизм —</h1>
          <p>одно из крупнейших течений в искусстве, характеризуемое
            экспериментаторством, стремлением к новаторству, использованием символики, недосказанности, намёков,
            таинственных и загадочных образов.
          </p>
        </div>
        <div class="block" data-aos="fade-up" data-aos-duration="750" data-aos-delay="750">
          <h2>Общие черты символизма в литературе:</h2>
          <ul class="ul_block">
            <li> идея о двух мирах (реальном и потустороннем);
            </li>
            <li> отражение действительности в символах;</li>
            <li> особый взгляд на интуицию как посредника в постижении и изображении мира;</li>
            <li> мистическое постижение мира;</li>
          </ul>
        </div>
      </div>
      <div class="global_names_block" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1500">
        <div class="slider_container">
          <h2 class="header_color_light">Писатели символисты</h2>
          <y-symbolism-slider/>
        </div>
      </div>
    </div>
    <div class="main_composition">
      <h2 data-aos="fade-up" data-aos-duration="750">Произведения символизма</h2>
      <div class="card_container">
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500">
          <template v-slot:front-side class="card card_template">
            <div class="name">
              <h2>Зинаида Гиппиус —</h2>
            </div>
            <div class="composition">
              <h3>"Любовь — одна"</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              Стихотворение отражает философские и эмоциональные размышления поэтессы о природе человеческих отношений и
              любви. Это произведение, которое выражает идею о том, что истинная любовь уникальна и неповторима.
            </p>
          </template>
        </y-card>
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="750">
          <template v-slot:front-side>
            <div class="name">
              <h2>Валерий Брюсов —</h2>
            </div>
            <div class="composition">
              <h3>"Фонарики"</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              Автор передает ощущение таинственности и ностальгии, призывая читателя смотреть на светящиеся фонари как
              на символы утраченных чувств и времен.
            </p>
          </template>
        </y-card>
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1000">
          <template v-slot:front-side>
            <div class="name">
              <h2>Константин Бальмонт —</h2>
            </div>
            <div class="composition">
              <h3>"Придорожные травы"</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              Стихотворение передает идею о том, что красота может быть обнаружена даже в мельчайших деталях природы,
              если обратить на них внимание и научиться видеть мир в его непеределанной простоте.
            </p>
          </template>
        </y-card>
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500">
          <template v-slot:front-side>
            <div class="name">
              <h2>Александр Блок —</h2>
            </div>
            <div class="composition">
              <h3>"Вхожу я в темные храмы…"</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              Стихотворение передает ощущение возвышенности, священности и таинства момента, когда поэт встречается с
              духовной глубиной и молитвенной атмосферой храма, что позволяет ему обрести внутренний покой и
              вдохновение.
            </p>
          </template>
        </y-card>
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="750">
          <template v-slot:front-side>
            <div class="name">
              <h2>Александр Блок —</h2>
            </div>
            <div class="composition">
              <h3>"Фабрика"</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              Текст передает образы и атмосферу жизни на фабрике, а также вызывает чувство беспомощности и боли,
              присущие тем, кто вынужден трудиться в таких суровых условиях.
            </p>
          </template>
        </y-card>
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1000">
          <template v-slot:front-side>
            <div class="name">
              <h2>Александр Добролюбов —</h2>
            </div>
            <div class="composition">
              <h3>"Встал ли я ночью?"</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              В стихотворении автор размышляет, стоит ли просыпаться ночью, чтобы задумываться о жизни, или лучше спать
              и не замечать тяжелых мыслей. Это произведение призывает задуматься о важности самопознания и понимания
              смысла собственной жизни.
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
import YSymbolismSlider from "@/components/UI/YSymbolismSlider.vue";

AOS.init()

@Options({
  name: 'symbolism-view',
  components: {YSymbolismSlider, YCard, YHeader, YRealismSlider},
})
export default class SymbolismView extends Vue {

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
  margin: 1rem 10rem;
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
