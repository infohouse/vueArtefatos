<template>
  <li class="list-group-item d-flex">
    <span>{{ tarefa.titulo }}</span>
    <span class="espacar"></span>
    <button
      @click="okTarefa"
      class="btn btn-sm mr-4"
      :class="classeCss"
      :title="feito"
    >
      <i class="fa" :class="icone"></i>
    </button>
    <button
      @click="$emit('editar', tarefa)"
      class="btn btn-sm btn-primary mr-1"
      title="editar"
    >
      <i class="fa fa-pencil-alt"></i>
    </button>
    <button
      @click="$emit('excluir', tarefa)"
      class="btn btn-sm btn-danger mr-1"
      title="deletar"
    >
      <i class="fa fa-trash"></i>
    </button>
  </li>
</template>

<script>
export default {
  props: {
    tarefa: Object,
  },
  computed: {
    classeCss() {
      return {
        "btn-secondary": !this.tarefa.concluido,
        "btn-primary": this.tarefa.concluido,
      };
    },
    feito() {
      return this.tarefa.concluido ? "Refazer" : "Concluir";
    },
    icone() {
      return this.tarefa.concluido ? "fa-check" : "fa-times";
    },
  },
  methods: {
    okTarefa() {
      this.$emit("cTarefa",
        Object.assign({}, 
            this.tarefa, { concluido: !this.tarefa.concluido })
      );
    },
  },
};
</script>

<style scoped>
.espacar {
  flex: 1 1 auto;
}
</style>