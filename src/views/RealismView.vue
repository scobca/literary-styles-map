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
            <li> изображение жизни в образах, соответствующих действительности, исторически конкретных событий, общества,
              эпохи;
            </li>
            <li> реальность – средство познания себя и мира вокруг;</li>
            <li> важность деталей интерьера, портрета, пейзажа;</li>
            <li> конкретика и типизация образов;</li>
          </ul>
        </div>
      </div>
      <div class="global_names_block" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1500">
        <y-realism-slider/>
      </div>
    </div>
    <div class="main_composition" data-aos="fade-up" data-aos-duration="750">
      <h2>Основные произведения реализма</h2>
      <y-card>
        <template v-slot:front-side>
          <p>lk</p>
        </template>
      </y-card>
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
