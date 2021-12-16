<template>
  <div class="row">

    <!-- coluna 1 -->
    <div class="col-8">

      <h2>Filmes</h2>

      <div class="list-group list-group-flush">

        <FilmesListaIten v-for="filme in filmes" 
          :key="filme.i" 
          :filme="filme"           
          @selFilme='filmeSelecionado = $event'
          :class="itemsel(filme)"  
          
        />
        
      </div>
    </div>

    <!-- coluna 2 -->
    <div class="col-4">

      <FilmesListaItenInfo 
      :filme="filmeSelecionado"
      @editfilme="editfilme"
      v-if="!editar"
      
      />


      <FilmesListaItenEditar v-else :filme="filmeSelecionado" />

    </div>

  </div>
</template>

<script>

import FilmesListaIten from './FilmesListaIten.vue'
import FilmesListaItenEditar from './FilmesListaItenEditar.vue'
import FilmesListaItenInfo from './FilmesListaItenInfo.vue'
import {eventBus} from '../main';

export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo,
    FilmesListaItenEditar
  },
  data(){

    return {
      filmes: [
        {titulo: 'Curtindo a vida adoidado'},
        {titulo: 'kickbox Desafio do dragão'},
        {titulo: 'Matrix'}
      ],

      filmeSelecionado: undefined,
      editar: false
    }
    
  },
  methods: {
    itemsel(f) {
      return {
        active: this.filmeSelecionado && this.filmeSelecionado.titulo == f.titulo
      }
    },
    editfilme(f){
      this.editar = true,
      this.filmeSelecionado = f
    }
  },
  created(){
    eventBus.$on('selecionarFilme', (f) => {
      this.filmeSelecionado = f
    })
  }
}
</script>