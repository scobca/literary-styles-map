<template>
  <div class="app_container">
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import YHeader from "@/components/UI/YHeader.vue";

@Options({
  name: 'App',
  components: {YHeader}
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
</style>
