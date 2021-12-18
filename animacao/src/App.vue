<template>
  <div id="app">

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Animações</h1>
        <p class="lead">Treinando transição/animação de elementos/components no Vue.</p>
      </div>
    </div>

 
    <div class="container"></div>

    <button class="btn btn-dark" @click="mostrar = !mostrar">alternar</button>
    <transition name="slide">
      <div class="alert alert-primary" v-if="mostrar">testando</div>
    </transition>


  </div>
</template>


<script>
export default {
  data(){
    return {
      mostrar: false
    }
  }
}
</script>

<style scoped>

@keyframes slide {
  0%{
    transform: translateX(-100px);
  }
  100%{
    transform: translateX(0);
  }
}

@keyframes slidex {
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(-100px);
  }
}

.slide-leave-active{
  animation: slide 0.7s reverse;
  transition: opacity 0.7s;
}

.slide-enter-active{
  animation: slide 0.7s;
  transition: opacity 0.7s;
}

.slide-leave-to, .slide-enter{
  opacity: 0;
}







.zoom-enter, .zoom-leave-to{
  transform: scale(0);
}
.zoom-enter-active,.zoom-leave-active{transition: transform 0.5s;}

.zoom-enter-to, .zoom-leave{
  transform: scale(1);
}

.fade-enter, .fade-leave-to{
  opacity: 0;
}

.fade-enter-active, .fade-leave-active{
  transition: opacity 1s;
}

.fade-enter-to, .fade-leave{
  opacity: 1;
}
</style>