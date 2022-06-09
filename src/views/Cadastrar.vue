<template>
  <form @submit.prevent="cadastrar">
    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
    <p class="text-center">Cadastro de alunos, defina um usuário e uma senha, você precisa ser um administrador para fazer esse cadastro</p>
    <div class="form-group">
      <label for="nome">nome</label>
      <input type="text" id="nome" class="form-control" required autofocus v-model="nome">
    </div>
    <div class="form-group">
      <label for="senha">Senha</label>
      <input type="password" id="senha" class="form-control" required v-model="senha">
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Cadastrar</button>
  </form>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'usuario',
  data() {
    return {
      nome: '',
      senha: '',
    }
  },
  computed: {
    ...mapState([
      'usuario',
      'token'
    ])
  },
  methods: {
    cadastrar() {
      axios.post('usuario',
          {
            nome: this.nome,
            senha: this.senha,
          })
        .then(res => {
          console.log(res);
          this.nome = '';
          this.senha = '';
          alert("usuário criado com sucesso!!")
        })
        .catch(error => console.log(error))
    },
  }
}
</script>