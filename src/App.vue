<template>
  <div id="app">
    <todos-app/>
  </div>
</template>

<script>
import TodosApp from '@/components/TodosApp'
import { mapActions } from 'vuex'
export default {
  name: 'app',
  components: {
    TodosApp
  },
  mounted () {
    this.getStorage()
  },
  methods: {
    ...mapActions(['getStorage'])
  }
}
</script>
