import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { 
      id: '1df31d', 
      name: 'Juanisimo Delgadiño',
      categories: ['comida', 'ropa', 'programas']
    },
    owner: {
      name: 'Juanisimo Delgadi',
      age: 12
    }
  },
  mutations: {
  },
  actions: {
  },
})
