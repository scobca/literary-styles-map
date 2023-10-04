<template>
  <div class="home_container">
    <y-france-map class="france_map_container"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import YFranceMap from "@/components/YFranceMap.vue";

@Options({
  components: {YFranceMap},
})
export default class HomeView extends Vue {

}
</script>

<style scoped lang="less">
.home_container {
  height: 81vh;
  width: 70vw;

  margin: 2rem 0 0 0;
  background: url("@/assets/img/map_background_2.png") fixed center no-repeat;
  background-size: 52rem 35rem;
}

.france_map_container {
  margin: 3rem 0;
  padding: 0 25vw 0 0;
}
</style>
