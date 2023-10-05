<template>
  <div class="main_container">
    <div class="text_block">
      <div class="block">
        <h1>Реализм —</h1>
        <p>направление, а также художественный метод в литературе, ставящий целью правдивое воспроизведение
          действительности в её типичных чертах.
        </p>
      </div>
      <div class="block">
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
    <div class="global_names_block">

    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import YTransition from "@/components/UI/YTransition.vue";
import BubbleTransition from "@/components/UI/BubbleTransition.vue";

@Options({
  name: 'realism-view',
})
export default class RealismView extends Vue {

}
</script>

<style scoped lang="less">
@import '@/assets/styles/color';

.main_container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1rem;
}

.text_block {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  font-size: 1.1rem;
}

.block {
  display: flex;
  flex-direction: column;

  max-width: 30vw;
  text-align: left;

  background: @bg-text-color;

  padding: 1.5rem;
  border-radius: .5rem;
}

</style>
