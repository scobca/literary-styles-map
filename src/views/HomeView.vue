<template>
  <y-header/>
  <div class="home_container">
    <div class="country_container">
      <y-france-map class="fm_container"/>
      <y-russia-map class="rm_container"/>
      <y-italy-map class="im_container"/>
    </div>
  </div>
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
.home_container {
  height: 81vh;
  width: 80vw;

  margin: 2rem 0 0 0;
  background: url("@/assets/img/map_background_2.png") fixed center no-repeat;
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
