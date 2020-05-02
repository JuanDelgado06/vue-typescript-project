import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { 
      id: '1df31d', 
      name: 'Juanisimo Delgadiño',
    },
    categories: ['comida', 'ropa', 'programas'],
    owner: {
      name: 'Juanisimo Delgadi',
      age: 12
    },
    todos: [
      {id: 1, text: '...', done: true},
      {id: 2, text: '...', done: false},
      {id: 3, text: '...', done: true},
      {id: 4, text: '...', done: false}
    ]
  },
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    //De esta manera se pueden convinar getters
    // activeTodosCount: (state, getters) => {
    //   return state.todos.length - getters.doneTodos.length
    // },
    activeTodosCount: state => {
      return state.todos.filter(todo => !todo.done).length
    },
  },
  mutations: {
  },
  actions: {
  },
})
