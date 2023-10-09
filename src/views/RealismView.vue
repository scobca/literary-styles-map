<template>
  <div class="main_container">
    <div class="text_block">
      <div class="block animate__animated animate__fadeInUp">
        <h1>Реализм —</h1>
        <p>направление, а также художественный метод в литературе, ставящий целью правдивое воспроизведение
          действительности в её типичных чертах.
        </p>
      </div>
      <div class="block animate__animated animate__fadeInUp animate__delay-1s">
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
    <div class="global_names_block animate__animated animate__fadeInUp animate__delay-2s">
      <y-realism-slider/>
    </div>
  </div>
</template>

<script lang="ts">
//@ts-ignore
import AOS from 'aos';
import {Options, Vue} from "vue-class-component";
import YRealismSlider from "@/components/UI/YRealismSlider.vue";

AOS.init()

@Options({
  name: 'realism-view',
  components: {YRealismSlider},
})
export default class RealismView extends Vue {

}
</script>

<style scoped lang="less">
@import '@/assets/styles/color';

.main_container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 8vw;
  margin: 2rem;
}

.text_block {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 75vh;

  font-size: 1.1rem;
}

.block {
  display: flex;
  flex-direction: column;

  max-width: 30vw;
  text-align: left;

  background: @bg-text-color;

  padding: 1.5rem 2.5rem;
  border-radius: .5rem;

  scale: 100%;
  transition-duration: .75s;
}

.block:hover {
  scale: 110%;
  margin-bottom: 2rem;
  margin-top: 2rem;
  transition-duration: .75s;
}

</style>
