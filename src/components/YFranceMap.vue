<template>
  <div class="france_map">
    <h2 class="country_header">Франция</h2>
    <img src="@/assets/img/maps/france_map_fst.png" alt="" class="fm-f img">
    <img src="@/assets/img/maps/france_map_snd.png" alt="" class="fm-s img">
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "y-france-map",
})
export default class YFranceMap extends Vue {

}
</script>

<style scoped lang="less">
.country_header {
  margin-bottom: .75rem;
  margin-left: 1rem;
}

.fm-f {
  height: 10rem;
  scale: 100%;
  transition-duration: .3s;
}

.fm-s {
  height: 9.1rem;
  margin-left: -4.2rem;
  margin-bottom: -.45rem;
}

.fm-f:hover, .fm-s:hover {
  scale: 120%;
  transition-duration: .3s;
  z-index: 100;
}
</style>
