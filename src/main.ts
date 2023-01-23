import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import drag from "v-drag"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
library.add(faFloppyDisk)

createApp(App).use(router).use(drag).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
