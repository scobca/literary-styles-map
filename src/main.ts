//creating App
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//import stylesheets
import '@/assets/styles/color.less'
import '@/assets/styles/main.less'
import '@/assets/styles/scrollbar_styles.less'
import '@/assets/styles/global_classes.less'

//animate.css library
import 'animate.css'

//AOS animations library
import 'aos/dist/aos.css';

//import Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import {store} from "@/store";

const vuetify = createVuetify({
  components,
})

createApp(App).use(store).use(router).use(vuetify).mount('#app')
