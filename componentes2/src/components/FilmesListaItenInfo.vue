<template>
    <div>
        <h2>Filme selecionado</h2>

        <div class="card" v-if="filme">
            <div class="card-body">
                <h5 class="card-title">{{ filme.titulo }}</h5>
                <button @click="editar" class="btn btn-danger float-right">Editar</button>
            </div>
        </div>
        <p v-else>Nenhum Filme selecionado</p>
    </div>
</template>

<script>

import {eventBus} from '../main';

export default {
    data(){
        return {
            filme: undefined
        }
    },
    methods:{
        editar(){
            this.$emit("editfilme", this.filme)
        }
    },
    created(){
        eventBus.$on('selecionarFilme', (filmeSelecionado) => {
            this.filme = filmeSelecionado
        })
    }    
}
</script>