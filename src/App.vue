<template>
  <div id="app" class="container">
    <nav id="nav" class="navbar navbar-light bg-light">
      <router-link to="/" class="navbar-toggler text-secondary">Home</router-link> 
      <router-link to="/trabalhos" class="navbar-toggler text-secondary">Trabalhos</router-link> 
      <a v-if="usuario" @click="logout" class="navbar-toggler text-secondary">Logout</a> 
      <router-link v-if="!usuario" to="/login" class="navbar-toggler text-secondary">Login</router-link> 
      <router-link v-if="usuario" to="/cadastro" class="navbar-toggler text-secondary">Cadastrar</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapState([
      'usuario'
    ])
  },
  methods: {
    ...mapMutations([
      'logout'
    ])
  }
}
</script>
