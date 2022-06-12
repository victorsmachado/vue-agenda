<template>
  <form @submit.prevent="cadastrar">
    <div class="text-center" style="padding:50px 0">
	<div class="logo">Registrar</div>
	<!-- Main Form -->
	<div class="login-form-1">
			<div class="login-form-main-message"></div>
			<div class="main-login-form">
				<div class="login-group">
					<div class="form-group">
						<label for="reg_username" class="sr-only">Email address</label>
						<input type="text" class="form-control" id="nome" name="username" placeholder="username" required autofocus v-model="nome">
					</div>
					<div class="form-group">
						<label for="reg_password" class="sr-only">Password</label>
						<input type="password" class="form-control" id="senha" name="password" placeholder="password" required v-model="senha">
					</div>
					
					
				</div>
				<button type="submit" class="login-button"><i class="fa fa-chevron-right"></i></button>
			</div>

	</div>
</div>
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