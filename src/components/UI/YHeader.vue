<template>
  <div class="container">
    <h2 class="header_text" @click="this.$router.push('/')">Литературные течения</h2>
    <div class="menu_buttons_block">
      <router-link to="/realism" class="menu_button">Реализм</router-link>
      <router-link to="/symbolism" class="menu_button">Символизм</router-link>
      <router-link to="/futurism" class="menu_button">Футуризм</router-link>
      <router-link to="/acmeism" class="menu_button">Акмеизм</router-link>
      <router-link to="" class="menu_button">Имажинизм</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: 'YHeader',
})
export default class YHeader extends Vue {

}
</script>

<style scoped lang="less">
@import "@/assets/styles/color";

.container {
  min-height: 3rem;
  width: 70vw;

  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  color: @header-text-color;
  background-color: @bg-header-color;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;
  box-sizing: border-box;
}

.header_text {
  color: @header-text-color;
}

.menu_buttons_block {
  display: flex;
  gap: 2rem;
}

.menu_button {
  text-decoration: none;
  font-weight: bold;

  scale: 100%;
  border-bottom: 2px solid transparent;
  color: @header-buttons-text-color;
  transition-duration: .5s;
}

.menu_button:hover {
  scale: 110%;
  border-bottom: 2px solid @active-text-color;
  color: @active-text-color;
  transition-duration: .5s;
}
</style>
