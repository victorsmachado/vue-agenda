import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import router from './router'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'my-sec-app',
  storage: localStorage
})

export default new Vuex.Store({
  plugins: [
    vuexPersist.plugin
  ],
  state: {
    usuario: null,
    token: null,
    autorizacao: null,

  },
  mutations: {
    setUsuario (state, usuario) {
      state.usuario = usuario
      console.log(usuario);
    },
    setToken (state, token)  {
      state.token = token
      console.log(token);
    },

    setAutorizacao (state, autorizacao)  {
      state.autorizacao = autorizacao
      console.log(autorizacao);
    },

    logout (state) {
      state.token = null
      state.usuario = null
      state.autorizacao= null
      router.push('/login')
    }
  },
  actions: {

  }
})