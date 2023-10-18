<template>
  <transition name="popup" class="popup">
    <y-popup-error/>
  </transition>
  <div class="app_container">
    <router-view/>
  </div>
  <y-footer/>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import YFooter from "@/components/UI/YFooter.vue";
import YPopupError from "@/components/UI/YPopupError.vue";

@Options({
  name: 'App',
  components: {YPopupError, YFooter}
})
export default class App extends Vue {
}
</script>

<style scoped lang="less">
.app_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.popup {
  z-index: 100000;
}
</style>
