<template>
  <div>
    <b-field class="is-pulled-right">
      <b-radio-button v-model="visibility"
        native-value="all">
        <span>All {{countAll}}</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="active">
        <span>Active {{countActive}}</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="completed">
        <span>Completed </span>
      </b-radio-button>
    </b-field>
  </div>
</template>

<script>
import { store } from '@/store'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['todos']),
    visibility: {
      get: function () {
        return store.state.visibility
      },
      set: function (newValue) {
        store.dispatch('changeVisibility', newValue)
      }
    },
    contAll () {
      return this.todos.length
    },
    countActive () {
      return this.todos.filter((todo) => todo.completed === false).length
    },
    countCompleted () {
      return this.todos.filter((todo) => todo.completed === true).length
    }
  }
}
</script>
