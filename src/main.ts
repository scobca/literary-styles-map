//creating App
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import stylesheets
import '@/assets/styles/main.less'

createApp(App).use(store).use(router).mount('#app')
