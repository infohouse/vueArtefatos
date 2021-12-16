import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


export const eventBus = new Vue({

  methods: {
    selecionarFilme(f){
      this.$emit('selecionarFilme', f)
    }
  }

})


new Vue({
  render: h => h(App),
}).$mount('#app')
