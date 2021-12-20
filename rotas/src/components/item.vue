<template>
  <li>
    <span>{{ contato.nome }}</span>
    <router-link :to="`/contato/${contato.id}`"  
    class="btn btn-info btn-sm float-right">Detalhes</router-link>
  </li>
</template>

<script>
export default {
  props: {
    contato: Object,
  },
};
</script>