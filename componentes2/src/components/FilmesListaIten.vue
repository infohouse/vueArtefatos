<template>
    <li class="list-group-item">
        <span>{{ filme.titulo }}</span>
        <button @click="cliqSel" class="btn btn-success float-right">Selecionar</button>
    </li>
</template>

<script>

import {eventBus} from '../main';

export default {
    props: {
        filme: Object
        
    },
    methods: {

        cliqSel(){
            //this.$emit('selFilme', this.filme)
            //eventBus.$emit('selFilme', this.filme)
            eventBus.selecionarFilme(this.filme)
        }

    }
}
</script>