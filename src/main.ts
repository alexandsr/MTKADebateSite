import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Vue from 'vue'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
    // options here
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

