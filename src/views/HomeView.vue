<template>
  <v-parallax :src="require('@/assets/img/bg_1.jpg')" class="parallax">
    <y-header class="header"/>
    <div class="home_container">
      <div class="country_container">
        <y-france-map class="fm_container"/>
        <y-russia-map class="rm_container"/>
        <y-italy-map class="im_container"/>
      </div>
    </div>
  </v-parallax>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import YFranceMap from "@/components/YFranceMap.vue";
import YItalyMap from "@/components/YItalyMap.vue";
import YRussiaMap from "@/components/YRussiaMap.vue";
import YHeader from "@/components/UI/YHeader.vue";

@Options({
  name: 'home-view',
  components: {YHeader, YRussiaMap, YItalyMap, YFranceMap},
})
export default class HomeView extends Vue {

}
</script>

<style scoped lang="less">
@import '@/assets/styles/color';

.parallax {
  min-width: 100vw;
}

.header {
  margin: auto;
  background-color: @bg-text-color-dark;
  color: @text-color-dark !important;
}

.home_container {
  height: 81vh;

  margin: 3rem 0;
  background: url("@/assets/img/map_background_2.png") center no-repeat;
  background-size: 62rem 35rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.country_container {
  max-width: 60vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.fm_container, .rm_container {
  margin: 2rem 0;
}
</style>
