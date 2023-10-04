<template>
  <div class="main_container">
    <h2 class="country_header">Италия</h2>
    <div class="italy_map">
      <div class="block im-s-block">
        <span class="style_name">Футуризм</span>
        <img src="@/assets/img/maps/italy_map.png" alt="" class="im-f img">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: 'y-italy-map',
})
export default class YItalyMap extends Vue{

}
</script>

<style scoped lang="less">
.italy_map {
  display: flex;
  flex-direction: row;
}

.block {
  display: flex;
  flex-direction: row;
}

.country_header {
  margin-left: 1rem;
}

.style_name {
  margin: 2rem 0;
  font-weight: bold;
  scale: 100%;
  transition-duration: .3s;
}

.im-f {
  height: 13rem;
  scale: 100%;
  transition-duration: .3s;
  margin-left: -4rem;
}

.im-s-block:hover .im-f, .im-s-block:hover .style_name{
  scale: 120%;
  transition-duration: .3s;
  z-index: 100;
}
</style>
