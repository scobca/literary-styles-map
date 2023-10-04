<template>
  <div class="russia_map">
    <h2 class="country_header">Россия</h2>
    <img src="@/assets/img/maps/russia_map_fst.png" alt="" class="rm-f img">
    <img src="@/assets/img/maps/russia_map_snd.png" alt="" class="rm-s img">
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: 'y-russia-map',
})
export default class YRussiaMap extends Vue {

}
</script>

<style scoped lang="less">
.country_header {
  margin-bottom: .75rem;
  margin-left: 1rem;
}

.rm-f {
  height: 10rem;
  scale: 100%;
  transition-duration: .3s;
}

.rm-s {
  height: 12rem;
  margin-left: -3.6rem;
  margin-bottom: .15rem;
}

.rm-f:hover, .rm-s:hover {
  scale: 120%;
  transition-duration: .3s;
  z-index: 100;
}
</style>
