import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../src/store'
import axios from 'axios'

axios.defaults.baseURL = 'https://8080-victorsmach-agendaescol-49ih5niza5b.ws-us47.gitpod.io/spring-app'



axios.interceptors.request.use(config => {
  if(store.state.token) {
    config.headers.Authorization = store.state.token
  }
  else{
    console.log("token não encontrado");
  }
  return config
})
axios.interceptors.response.use(res => {
    return res
  }, error => {
    if(error.response.status === 403) {
      alert('Não autorizado!')
    }
    else if (error.response.status === 401) {
      store.commit('logout')
      router.push('/login')
    }
    throw error
})

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')