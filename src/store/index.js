import { createStore } from 'vuex'
import users from './modules/users'
import asignatures from './modules/asignatures'
import VuexPersistence from 'vuex-persist'


const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules:['users']
})

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users,
    asignatures
  },
  plugins: [vuexLocal.plugin]

})
