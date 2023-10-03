//creating App
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Chart.js
import Chart from 'chart.js/auto';

createApp(App).use(store).use(router).mount('#app')
