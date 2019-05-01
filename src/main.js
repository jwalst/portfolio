import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css'

import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDatabase, faServer, faCircle, faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons'
import { faGitlab, faLinkedinIn, faDrupal, faLaravel, faVuejs, faPhp, faHtml5, faCss3, faApple, faJs, faGit, faLinux, faPython } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(BootstrapVue);

library.add(faGitlab, faLinkedinIn, faDrupal, faLaravel, faVuejs, faPhp, faHtml5, faCss3, faApple, faJs, faDatabase, faServer, faGit, faCircle, faEnvelope, faLinux, faPython, faStar);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
