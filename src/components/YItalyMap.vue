<template>
  <div class="italy_map">
    <h2 class="country_header">Италия</h2>
    <img src="@/assets/img/maps/italy_map.png" alt="" class="im-f img">
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
.country_header {
  margin-left: 1rem;
}

.im-f {
  height: 13rem;
  scale: 100%;
  transition-duration: .3s;
}

.im-f:hover {
  scale: 120%;
  transition-duration: .3s;
  z-index: 100;
}
</style>
