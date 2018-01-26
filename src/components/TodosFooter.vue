<template>
  <div>
    <p class="is-pulled-left">{{todos.length}}</p>
    <visibility-input/>
  </div>
</template>

<script>
import VisibilityInput from '@/components/VisibilityInput'
import {mapGetters} from 'vuex'
export default {
  components: {
    VisibilityInput
  },
  computed: {
    ...mapGetters(['todos'])
  }
}
</script>
