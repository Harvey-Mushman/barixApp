/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// created 7-16-2023
// npm create vuetify

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// tostr
// npm install --save vue3-toastify
//import Vue3Toastify from 'vue3-toastify';
//import 'vue3-toastify/dist/index.css';

// moment
// npm install moment
// import moment from 'moment'
// in html... { $moment(item.created_at).format("YYYY-MM-DD") }}

// fontAwesome
// https://fontawesome.com/v6/docs/web/use-with/vue/
// npm i --save @fortawesome/fontawesome-svg-core
// # Free icons styles
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons
// npm install @fortawesome/fontawesome-free -D
// npm i --save @fortawesome/vue-fontawesome@latest-3

/* import the fontawesome core */
//import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
//import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
//library.add(faUserSecret)


const app = createApp(App)


registerPlugins(app)

//app.use(Vue3Toastify, { autoClose: 3000 } );
// app.config.globalProperties.window = window
// app.config.globalProperties.$moment=moment;
// app.use('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
