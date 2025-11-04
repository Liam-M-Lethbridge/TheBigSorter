import { createApp } from 'vue'
import App from '../src/client/views/App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

