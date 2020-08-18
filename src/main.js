import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App)

app.config.devtools = true
app.config.errorHandler = (...stuff) => { console.error(...stuff); console.log(...stuff); console.warn(...stuff); }

app.mount('#app')
