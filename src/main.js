import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'

library.add(faGithubSquare, faEnvelopeSquare)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')