<template>
  <div id="app">
    
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Formulários no Vue</h1>
        <p class="lead">Treinando a manipulação de formulários</p>
      </div>
    </div>

    <div class="container">

      <div class="row">

        <!-- formulario -->
        <div class="col-sm-6">

          <h3>Preencha abaixo</h3>

          <form @submit.prevent="enviar">

            <div class="form-group">
              <label>Nome:</label>
              <input type="text" class="form-control" v-model.trim="dev.nome" placeholder="Seu nome">
            </div>

            <div class="form-group">
              <label>Endereço de email:</label>
              <input type="email"  v-model="dev.email" class="form-control" placeholder="Seu email">
            </div>

            <div class="form-group">
              <label>Idade:</label>
              <input type="number"  v-model="dev.idade" class="form-control" placeholder="Sua idade">
            </div>

            <div class="form-group">

              <p>Gênero:</p>

              <div class="form-check form-check-inline">
                <input type="radio" v-model="dev.genero" class="form-check-input" value="Masculino">
                <label class="form-check-label">Masculino</label>
              </div>

              <div class="form-check form-check-inline">
                <input type="radio" v-model="dev.genero" class="form-check-input" value="Feminino">
                <label class="form-check-label">Feminino</label>
              </div>

            </div>

            <div class="form-group">
              <label>Ocupação:</label>
              <select class="form-control" placeholder="Seu email" v-model="dev.ocupacao">
                <option v-for="(o, i) in dev.ocupacoes" :key="i">{{o}}</option>
              </select>
            </div>  

            <div class="form-group">

              <p>Tecnologias:</p>

              <div class="form-check form-check-inline">
                <input v-model="dev.tecnologia" type="checkbox" class="form-check-input" value="JavaScript">
                <label class="form-check-label">JavaScript</label>
              </div>

              <div class="form-check form-check-inline">
                <input v-model="dev.tecnologia" type="checkbox" class="form-check-input" value="Vue JS">
                <label class="form-check-label">Vue JS</label>
              </div>

              <div class="form-check form-check-inline">
                <input v-model="dev.tecnologia" type="checkbox" class="form-check-input" value="Vuex">
                <label class="form-check-label">Vuex</label>
              </div>

              <div class="form-check form-check-inline">
                <input v-model="dev.tecnologia" type="checkbox" class="form-check-input" value="Vue Router">
                <label class="form-check-label">Vue Router</label>
              </div>

            </div>      

            <div class="form-group">
              <label>Resumo de perfil:</label>
              <textarea class="form-control" v-model="dev.biografia" placeholder="Conte-nos um pouco sobre você..."></textarea>
            </div>

            <div class="form-group">

              <div class="form-check form-check-inline">
                <input type="checkbox" v-model="dev.notificacao" class="form-check-input">
                <label class="form-check-label">Receber notificações por email</label>
              </div>

            </div>

            <button class="btn btn-secondary">Resetar</button>
            <button class="btn btn-success" type="submit">Enviar</button>

          </form>

        </div>

        <!-- saida -->
        <div class="col-sm-6">

          <h3>Saída</h3>

          <div class="card">

            <div class="card-header">Dados</div>

            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Nome: {{ dev.nome }}</strong></li>
              <li class="list-group-item"><strong>Email: {{ dev.email }}</strong> </li>
              <li class="list-group-item"><strong>Idade: {{ dev.idade }}</strong></li>
              <li class="list-group-item"><strong>Gênero: {{dev.genero}}</strong> </li>
              <li class="list-group-item"><strong>Ocupação: {{ dev.ocupacao }}</strong> </li>
              <li class="list-group-item"><strong>Tecnologias:</strong>
                  <ul>
                    <li v-for="(t, id) in dev.tecnologia" :key="id">{{ t }}</li>
                  </ul>           
              </li>
              <li class="list-group-item">
                <strong class="white-space pre">Biografia: {{ dev.biografia }}</strong>
              </li>
              <li class="list-group-item"><strong>Receber notificações {{dev.notificacao}}</strong> </li>
            </ul>

            <div class="card-header">Model</div>

            <div class="card-body">
              <pre><code>{{ dev }}</code></pre>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>


<script>
export default {
  data(){
    return {
      dev: { 
        tecnologia: [],
        ocupacoes: ['dev front', 'dev back', 'analista', 'peão']  
      }
    }
  },
  methods:{
    enviar(){
      const teste = Object.assign({}, this.dev)
      console.log('formulario', teste)
    }
  }
}
</script>

<style scoped>
  .btn {
    margin-right: 5px;
  }
</style>