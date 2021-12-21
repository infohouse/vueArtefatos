<template>
  <div class="mt-4">
    <h2 class="font-weight-light">Salvar Tarefa</h2>
    <form @submit.prevent="salvar">
      <div class="row">
        <div :class="coluna">
          <div class="form-group">
            <label>title</label>
            <input type="text" v-model="tarefaLocal.titulo" class="form-control" placeholder="tarefa" />
          </div>
        </div>
        <div class="col sm-2" v-if="tarefa">
          <div class="form-group">
            <label>Tarefa Concluida?</label>
            <button type="button" class="btn btn-sm d-block" :class="btnConcluido" @click="tarefaLocal.concluido = !tarefaLocal.concluido">
              <i class="fa" :class="icone"></i>
            </button>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Salvar</button>
    </form>
  </div>
</template>

<script>
export default {
    props:{
        tarefa: {
            type: Object,
            default: undefined
        }
    },
    data(){
        return {
            tarefaLocal: Object.assign(
                {}, {titulo: '', concluido: false}, this.tarefa
            )
        }
    },
    computed:{
        btnConcluido(){
          return this.tarefa && this.tarefaLocal.concluido ? 'btn-success' : 'btn-secondary'
        },
        coluna(){
            return this.tarefa ? 'col-sm-10' : 'col-sm-12'
        },
        icone() {
            return this.tarefa && this.tarefaLocal.concluido ? "fa-check" : "fa-times";
    }
    },
    methods:{
      salvar(){
        const operacao = !this.tarefa ? 'nTarefa' : 'eTarefa'
        this.$emit(operacao, this.tarefaLocal)
        this.tarefaLocal = {titulo: '', concluido: false}
      }
    },
    watch: {
      tarefa(){
        this.tarefaLocal = Object.assign({}, this.tarefa)
      }
    }
}
</script>