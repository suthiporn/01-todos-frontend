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
    DELETE_TODO (state, index) {
      state.todos.splice(index, 1)
    },
    CHANGE_VISIBILITY (state, newVisibilityValue) {
      state.visibility = newVisibilityValue
    },
    USE_COMPLETED (state, {index, value}) {
      state.todos[index].completed = value
    },
    CLEAR_COMPLETE (state) {
      for (let i = state.todos.length - 1; i >= 0; i--) {
        if (state.todos[i].completed === true) {
          state.todos.splice(i, 1)
        }
      }
    }
  },
  actions: {
    addTodo ({commit}, title) {
      commit('ADD_TODO', title)
    },
    deleteTodo ({commit}, index) {
      commit('DELETE_TODO', index)
    },
    changeVisibility ({commit}, newVisibilityValue) {
      commit('CHANGE_VISIBILITY', newVisibilityValue)
    },
    usecompleted ({commit}, object) {
      commit('USE_COMPLETED', object)
    },
    clearComplete ({commit}) {
      commit('CLEAR_COMPLETE')
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility
  }
})
