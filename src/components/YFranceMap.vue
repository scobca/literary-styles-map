<template>
  <div class="main_container">
    <h2 class="country_header">Франция</h2>
    <div class="france_map">
      <div class="block fm-f_block">
        <span class="style_name">Реализм</span>
        <img src="@/assets/img/maps/france_map_fst.png" alt="" class="fm-f img">
      </div>
      <div class="block block_reverse fm-s_block">
        <span class="style_name">Символизм</span>
        <img src="@/assets/img/maps/france_map_snd.png" alt="" class="fm-s img">
      </div>
    </div>
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
.france_map {
  display: flex;
  flex-direction: row;
}

.block {
  display: flex;
  flex-direction: row;
}

.block_reverse {
  display: flex;
  flex-direction: row-reverse;
}

.style_name {
  margin: 1rem;
  font-weight: bold;
  scale: 100%;
  transition-duration: .3s;
}

.country_header {
  margin-bottom: .75rem;
  margin-left: 1rem;
}

.fm-f {
  height: 10rem;
  margin-left: -2rem;
  scale: 100%;
  transition-duration: .3s;
}

.fm-s {
  height: 9.1rem;
  margin-left: -4.25rem;
  margin-top: 1.2rem;
  margin-right: -2rem;
}

.fm-f_block:hover .style_name, .fm-f_block:hover .fm-f,
.fm-s_block:hover .fm-s, .fm-s_block:hover .style_name {
  scale: 120%;
  transition-duration: .3s;
  z-index: 100;
}
</style>
