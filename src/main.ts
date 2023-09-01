import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import { i18n } from './app/i18n'

const app = createApp(App)

app.use(createPinia())
app.use(i18n)

import router from './router'

app.use(router)

app.mount('#app')
