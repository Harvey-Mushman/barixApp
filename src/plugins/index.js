/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
//import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'

export function registerPlugins (app) {
  console.log('index.js')
  //loadFonts()
  app
    .use(vuetify)
    .use(router)
}
