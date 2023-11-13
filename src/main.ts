import { createApp } from 'vue'
import App from './App.vue'

import ImageIpreview from 'vue3-image-ipreview'
import 'vue3-image-ipreview/dist/style.css'

const app = createApp(App)

app.use(ImageIpreview).mount('#app')

