//creating App
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import stylesheets
import '@/assets/styles/color.less'
import '@/assets/styles/main.less'
import '@/assets/styles/scrollbar_styles.less'

//import Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

const vuetify = createVuetify({
  components,
})

createApp(App).use(store).use(router).use(vuetify).mount('#app')
