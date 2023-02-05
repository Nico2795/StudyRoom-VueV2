import { createApp } from 'vue'
import { createVfm } from 'vue-final-modal'
import App from './App.vue'

const vfm = createVfm()


//Inicializamos Ellipse

import VueEllipseProgress from 'vue-ellipse-progress';

const app = createApp()
app.use(vfm).mount('#app')
app.use(VueEllipseProgress)

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'


const vuetify = createVuetify({
  components,
  directives,
})

//MODAL



createApp(App).use(vuetify).mount('#app')


