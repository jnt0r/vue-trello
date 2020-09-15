import Vue from 'vue'
import App from './App.vue'
import {MdButton, MdCard, MdContent, MdField, MdIcon, MdList, MdMenu, MdTabs} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdIcon)
Vue.use(MdMenu)
Vue.use(MdList)
Vue.use(MdCard)
Vue.use(MdField)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
