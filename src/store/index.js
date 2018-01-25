import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    todos: [],
    visibility: 'all'
  },
  mutations: {
    ADD_TODO (state, title) {
      state.todos.push({
        title,
        completed: false
      })
    },
    REMOVE_TODO (state, index) {
      state.todos.splice(index, 1)
    },
    CHANGE_VISIBILITY (state, newVisibilityValue) {
      state.visibility = newVisibilityValue
    }
  },
  actions: {
    addTodo ({commit}, title) {
      commit('ADD_TODO', title)
    },
    removeTodo ({commit}, index) {
      commit('REMOVE_TODO', index)
    },
    changeVisibility ({commit}, newVisibilityValue) {
      commit('CHANGE_VISIBILITY', newVisibilityValue)
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility
  }
})
