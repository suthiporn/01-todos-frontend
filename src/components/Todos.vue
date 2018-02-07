<template>
  <div id="localstorage">
    <div v-for="(todo, index) in todos" :key="todo.title" v-if="visibility === 'all' ">
      <b-field class="is-pulled-left handle">
        <b-checkbox size="is-large" @input="usecompleted({index, value: $event})" :values="todo.completed">
          <strike v-if="todo.completed">{{todo.title}}</strike>
          <div v-else>{{ todo.title }} </div>
        </b-checkbox>
      </b-field>
      <a class="delete is-pulled-right" @click="deleteTodo(index)"></a>
      <div class="is-clearfix"></div>
    </div>


    <div v-for="(todo, index) in todos" :key="todo.title" v-if="visibility === 'active' ">
      <div v-if="todo.completed === false">
      <b-field class="is-pulled-left handle">
        <b-checkbox size="is-large" @input="usecompleted({index, value: $event})">
          <strike v-if="todo.completed">{{todo.title}}</strike>
          <div v-else>{{ todo.title }} </div>
        </b-checkbox>
      </b-field>
      <a class="delete is-pulled-right" @click="deleteTodo(index)"></a>
      <div class="is-clearfix"></div>
    </div>
  </div>

<div v-for="(todo, index) in todos" :key="todo.title" v-if="visibility === 'completed' ">
    <div v-if="todo.completed === true">
      <b-field class="is-pulled-left handle">
        <b-checkbox size="is-large" @input="usecompleted({index, value: $event})" :values="true">
          <strike v-if="todo.completed">{{todo.title}}</strike>
          <div v-else>{{ todo.title }} </div>
        </b-checkbox>
      </b-field>
      <a class="delete is-pulled-right" @click="deleteTodo(index)"></a>
      <div class="is-clearfix"></div>
    </div>
  </div>
  <button class="button is-medium" @click="clearComplete()"> Clear Completed </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Sortable from 'sortablejs'

export default {
  computed: {
    ...mapGetters(['todos', 'visibility'])
  },
  methods: {
    ...mapActions(['deleteTodo', 'usecompleted', 'clearComplete', 'saveStorage', 'Sortables']),
    onUpdate: function (event) {
      this.Sortables({newIndex: event.newIndex, oldIndex: event.oldIndex})
    }
  },
  watch: {
    todos: {
      handler (val) {
        this.saveStorage(val)
      },
      deep: true
    }
  },
  mounted () {
    let st = document.getElementById('localstorage')
    Sortable.create(st, { handle: '.handle', onUpdate: this.onUpdate, animation: 150 })
  }
}
</script>
