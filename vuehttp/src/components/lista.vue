<template>
  <div>
    <div class="row">
      <div class="col col-sm-10">
        <h3 class="font-weight-light">Tarefas</h3>
      </div>
      <div class="col col-sm-2">
        <button @click="exibirCriarT" class="btn btn-primary float-right mr-2">
          <i class="fa fa-plus mr-2"></i>
        </button>
      </div>
    </div>

    <ul class="list-group">
      <item v-for="t in tarefas" :key="t.id" 
        :tarefa="t" @editar="seltarefa" 
          @excluir="xTarefa" @cTarefa="editarTarefa" />
    </ul>

    <salvar v-if="exibir" @nTarefa="criar" @eTarefa="editarTarefa" :tarefa="selecao"/>
  </div>
</template>


<script>
import axios from "axios";
import config from "../config/config";
import item from "./item.vue";
import salvar from "./salvar.vue";

export default {
  components: { item, salvar },
  data() {
    return {
      tarefas: [],
      exibir: false,
      selecao: undefined
    };
  },
  created() {
    axios.get(`${config.apiUrl}/tarefas`).then((res) => {
      this.tarefas = res.data;
    });
  },
  methods:{
      criar(tarefa) {
          axios.post(`${config.apiUrl}/tarefas`,tarefa)
          .then(res => {
              console.log('post', res),
              this.tarefas.push(res.data),
              this.exibir = false
          })
      },
      editarTarefa(tarefa){
        axios.put(`${config.apiUrl}/tarefas/${tarefa.id}`,tarefa)
          .then(res => {
            console.log('put ', res)
            const index = this.tarefas.findIndex(t => t.id == tarefa.id)
            this.tarefas.splice(index, 1, tarefa)
            this.redefinir()            
          })
      },
      redefinir(){
        this.selecao = undefined
        this.exibir = false
      },
      seltarefa(tarefa){
        this.selecao = tarefa
        this.exibir = true
      },
      xTarefa(tarefa){
        const sim = window.confirm('Tem certeza?')
        if(sim){
          axios.delete(`${config.apiUrl}/tarefas/${tarefa.id}`)
            .then(res => {
              console.log('delete ', res)
              const index = this.tarefas.findIndex(t => t.id == tarefa.id)
              this.tarefas.splice(index, 1)             

          })
        }
      },
      exibirCriarT(){
        if(this.selecao){
          this.selecao = undefined
          return
        }
        this.exibir = !this.exibir
      }
  }
  
};
</script>