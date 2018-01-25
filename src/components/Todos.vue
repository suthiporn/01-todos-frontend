<template>
  <div>
    <div v-for="todo in todos" :key="todo.title">
      <b-field class="is-pulled-left">
        <b-checkbox size="is-large">{{ todo.title }}</b-checkbox>
      </b-field>
      <a class="delete is-pulled-right" @click="removeTodo(index)"></a>
      <div class="is-clearfix"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default {
  computed: {
    ...mapGetters(['todos'])
  },
  methods: {
    ...mapActions(['removeTodo'])
  }
}
</script>
