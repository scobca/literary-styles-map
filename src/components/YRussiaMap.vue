<template>
  <div class="main_container">
    <h2 class="country_header">Россия</h2>
    <div class="russia_map">
      <div class="block rm-f-block" @click="this.$router.push('/acmeism')">
        <span class="style_name">Акмеизм</span>
        <img src="@/assets/img/maps/russia_map_fst.png" alt="" class="rm-f img">
      </div>
      <div class="block block_reverse rm-s-block" @click="openErr">
        <span class="style_name">Имажинизм</span>
        <img src="@/assets/img/maps/russia_map_snd.png" alt="" class="rm-s img">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: 'y-russia-map',
})
export default class YRussiaMap extends Vue {
  openErr() {
    this.$store.commit('openErrorPopup', 'Что-то пошло не так. Не удается получить информацию с сервера')
  }
}
</script>

<style scoped lang="less">
.russia_map {
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

.rm-f {
  height: 10rem;
  margin-left: -3.5rem;
  scale: 100%;
  transition-duration: .3s;
}

.rm-s {
  height: 12rem;
  margin-left: -3.6rem;
  margin-top: -2.2rem;
  margin-right: -2rem;
}

.rm-f-block:hover .rm-f, .rm-f-block:hover .style_name, .rm-s-block:hover .rm-s, .rm-s-block:hover .style_name {
  scale: 120%;
  transition-duration: .3s;
  z-index: 100;
  cursor: pointer;
}
</style>
