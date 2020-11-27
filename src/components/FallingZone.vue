<template>
  <div class="falling-zone">
    <Object
      v-for="obj in fallingObjects"
      :key="obj.id"
      :object="obj"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Object from './Object.vue'

export default {
  name: 'FallingZone',
  components: {
    Object
  },
  computed: {
    ...mapState([
      'fallingObjects'
    ])
  }
}
</script>
