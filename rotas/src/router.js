import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Contato from './views/contato/Contato.vue'
import Detalhe from './views/contato/detalhe.vue'

Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/contatos', component: Contato},
    {path: '/contato/:id', component: Detalhe},
    {path: '*', redirect: '/contatos'}

  ]
})