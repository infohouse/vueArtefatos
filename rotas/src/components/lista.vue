<template>
  <div>
    <h3>Contatos</h3>

    <ul class="list-group" v-if="contatos.length > 0">
      <item
        class="list-group-item"
        v-for="c in contatos"
        :key="c.id"
        :contato="c"
      />
    </ul>
    <button class="btn-dark" @click="voltar">voltar</button>
  </div>
</template>

<script>
import item from "./item.vue";

export default {
  components: {
    item,
  },
  data() {
    return {
      contatos: [
        { id: 1, nome: "jovenal", email: "jo@email.com" },
        { id: 2, nome: "mentos", email: "mentos@email.com" },
        { id: 3, nome: "pendrive", email: "pend@email.com" },
      ],
    };
  },
  methods: {
    voltar() {
      this.$router.back();
    },
  },
};
</script>