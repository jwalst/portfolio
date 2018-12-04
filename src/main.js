import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'

import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDatabase, faServer, faCodeBranch, faCircle } from '@fortawesome/free-solid-svg-icons'
import { faGitlab, faLinkedin, faDrupal, faLaravel, faVuejs, faPhp, faHtml5, faCss3, faApple, faJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faGitlab, faLinkedin, faDrupal, faLaravel, faVuejs, faPhp, faHtml5, faCss3, faApple, faJs, faDatabase, faServer, faCodeBranch, faCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
